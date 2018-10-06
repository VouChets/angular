
angular
        .module('manager')
        .controller('ManagerHomeController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster', '$http', '$httpParamSerializerJQLike',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster, $http, $httpParamSerializerJQLike) {
                $scope.pathImageLocal = "http://localhost/ws/public/";
                $scope.post = {
                    section_id: 0,
                    status: "show",
                    "num": "",
                    "video": "",
                    "link_text": "",
                    "description": "",
                    "link": "",
                    "title": "",
                    "id": -1
                };
                $scope.sections = [
                    {id: 0, description: "Secccion"},
                    {id: 1, description: "Conocenos"},
                    {id: 2, description: "Novedades"},
                    {id: 3, description: "Videos"},
                    {id: 4, description: "Profesionales"}
                ];
                $scope.user = {};
                if (angular.isUndefined($sessionStorage.user)) {
                    $state.go('main.loginManager');
                } else {
                    $scope.user = $sessionStorage.user;
                }
                $scope.cerrar = function () {
                    $scope.user = {};
                    $sessionStorage.user = {};
                    $state.go('main.loginManager');
                };
                $scope.getSections = function () {
                    CommonResource.getSections({}).$promise.then(function (response) {
                        if (response.status == 200) {
                            $scope.sections = response.items;
                            $scope.sections.unshift({id: 0, description: "Elegir seccción"});
                        }
                    });
                };
                $scope.getSections();
                $scope.getPosts = function () {
                    CommonResource.getPosts({}).$promise.then(function (response) {
                        if (response.status == 200) {
                            $scope.posts = response.items;
                            angular.forEach($scope.posts, function (item) {
                                item.created_at = new Date(item.created_at);
                                item.updated_at = new Date(item.updated_at);
                            });
                        }
                    });
                };
                $scope.getPosts();
                $scope.postValido = function () {
                    var mensaje = "";
                    var ban = true;
                    mensaje += ($scope.post.section_id == 0) ? "Debe elegir una sección </br>" : "";
                    mensaje += ($scope.post.title == "") ? "El título es obligatorio </br>" : "";
                    if (mensaje != "") {
                        toaster.pop('error', "Error", mensaje, 8000, 'trustedHtml');
                        ban = false;
                    }
                    return ban;
                };
                $scope.guardarPost = function () {
                    if ($scope.postValido()) {
                        var data = {"json": JSON.stringify($scope.post)};
                        new CommonResource(data).$setPost(function (response) {
                            if (response.status == "success" && response.code == 200) {
                                $scope.post = {
                                    section_id: 0,
                                    status: "0",
                                    "num": "",
                                    "video": "",
                                    "link_text": "",
                                    "description": "",
                                    "link": "",
                                    "title": "",
                                    "id": -1
                                };
                                if (angular.isUndefined($scope.files) || $scope.files == null) {
                                    $scope.getPosts();
                                } else {
                                    $scope.subirImagen(response.post.id);
                                }

                            } else {
                                toaster.pop('error', "Error", response.mensaje, 8000);
                            }
                        });
                    }
                };
                $scope.form = {image: ""};
                $scope.subirImagen = function (id) {
                    if ((!angular.isUndefined($scope.files)) && ($scope.files != null)) {
                        $scope.form.image = $scope.files[0];
                        $http({
                            method: 'POST',
                            url: 'http://localhost/ws/public/api/posts/imagen',
                            processData: false,
                            transformRequest: function (data) {
                                var formData = new FormData();
                                formData.append(id, $scope.form.image);
                                return formData;
                            },
                            data: $scope.form,
                            headers: {
                                'Content-Type': undefined
                            }
                        }).then(function (data) {
                            $scope.files = null;
                            $scope.currentFile = null;
                            $scope.image_source = null;
                            $scope.form.image = null;
                            angular.element("input[type='file']").val(null);
                            $scope.getPosts();
                        });
                    } else {
                        console.log("error");
                    }
                };
                $scope.uploadedFile = function (element) {
                    $scope.currentFile = element.files[0];
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        $scope.image_source = event.target.result;
                        $scope.$apply(function ($scope) {
                            $scope.files = element.files;
                        });
                    };
                    reader.readAsDataURL(element.files[0]);
                };
                $scope.isModificar = false;
                $scope.modificarPost = function (post) {
                    $scope.isModificar = true;
                    $scope.post = angular.copy(post);
                };
                $scope.cancelarPost = function () {
                    $scope.isModificar = false;
                    $scope.post = {
                        section_id: 0,
                        status: "0",
                        "num": "",
                        "video": "",
                        "link_text": "",
                        "description": "",
                        "link": "",
                        "title": "",
                        "id": -1
                    };
                    $scope.files = null;
                    $scope.currentFile = null;
                    $scope.image_source = null;
                    $scope.form.image = null;
                    angular.element("input[type='file']").val(null);
                };
                $scope.updatePost = function () {
                    var data = {"json": JSON.stringify($scope.post)};
                    new CommonResource.updatePost({id: $scope.post.id}, data).$promise.then(function (response) {
                        if (response.status == "success" && response.code == 200) {
                            if (angular.isUndefined($scope.files) || $scope.files == null) {
                                toaster.pop('success', "Actualizado", "Publicación actualizada correctamente.", 8000);
                                $scope.getPosts();
                            } else {
                                $scope.subirImagen($scope.post.id);
                            }
                            $scope.post = {
                                section_id: 0,
                                status: "0",
                                "num": "",
                                "video": "",
                                "link_text": "",
                                "description": "",
                                "link": "",
                                "title": "",
                                "id": -1
                            };
                        } else {
                            toaster.pop('error', "Error", response.mensaje, 8000);
                        }
                    });
                };
                $scope.miniImage = "";
                $scope.showImage = function (img) {
                    if (img!=null && img.length > 0) {
                        $scope.miniImage = $scope.pathImageLocal + img;
                    } else {
                        $scope.miniImage = "";
                    }
                };
                $scope.hideImage = function () {
                    $scope.miniImage = "";
                };
            }]);