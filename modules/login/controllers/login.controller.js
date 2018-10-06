

angular
        .module('login')
        .controller('LoginController', ['$scope', '$rootScope', '$state', '$sessionStorage', '$uibModal', '$location', '$window','CommonResource', 'toaster',
    function ($scope, $rootScope, $state, $sessionStorage, $uibModal, $location, $window,CommonResource,toaster) {
                $scope.usuario={
                    usuario:"",
                    clave:""
                };
                $scope.opciones={
                    comando:"login",
                    usuario:$scope.usuario
                };
                $scope.login = function () {
                    new CommonResource($scope.opciones).$postComando(function (response) {
                        if (response.success=="1"){
                            var usuario={
                                usuario:response.items[0].nombre,
                                nombre:response.items[0].usuario
                            };
                            $sessionStorage.usuario=usuario;
                            $state.go("main.home.principal");
                        }else{
                            toaster.pop('error', "Error",response.mensaje,5000);
                        }
                    });
                };
               
            }]);

