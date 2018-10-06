'use strict';

angular
        .module('home')
        .controller("ModalNuevoProductoController", ["$scope", "$uibModalInstance", "$rootScope", '$localStorage', 'CommonResource', '$sessionStorage', '$filter', 'toaster',
            function ($scope, $uibModalInstance, $rootScope, $localStorage, CommonResource, $sessionStorage, $filter, toaster) {
                $scope.cerrarModal = function () {
                    $uibModalInstance.close();
                };
                $scope.nuevoProducto = {
                    nombre: "",
                    descripcion: "",
                    id_unidadmedida: "",
                    imgUrl:"",
                    precio:""
                };
                $scope.opciones = {
                    comando: "setProducto",
                    nuevoProducto: $scope.nuevoProducto
                };
                $scope.setProducto= function () {
                    new CommonResource($scope.opciones).$postComando(function (response) {
                        if (response.success == "1") {
                            $scope.cerrarModal();
                        } else {
                            toaster.pop('error', "Error", response.mensaje, 8000);
                        }
                    });
                };
            }]);

