'use strict';

angular
        .module('home')
        .controller("ModalNuevoPedidoController", ["$scope", "$uibModalInstance", "$rootScope", '$localStorage', 'CommonResource', '$sessionStorage', '$filter', 'toaster',
            function ($scope, $uibModalInstance, $rootScope, $localStorage, CommonResource, $sessionStorage, $filter, toaster) {
                $scope.cerrarModal = function () {
                    $uibModalInstance.close();
                };
                $scope.isCargando = true;
                $scope.getClientes = function () {
                    CommonResource.getComando({
                        comando: "getClientes"
                    }).$promise.then(function (response) {
                        if (response.success == "1") {
                            angular.forEach(response.items, function (value, key) {
                                if (value.isWhatsapp == 1) {
                                    value.isWhatsapp = true;
                                } else {
                                    value.isWhatsapp = false;
                                }
                            });
                            $scope.vecClientes = response.items;
                            $scope.isCargando = false;
                        }
                    });
                };
                $scope.getClientes();
                $scope.getProductos = function () {
                    CommonResource.getComando({
                        comando: "getProductos"
                    }).$promise.then(function (response) {
                        if (response.success == "1") {
                            $scope.vecProductos = response.items;
                        }
                    });
                };
                $scope.productoPedido = new Array();
                $scope.nuevoProductoPedido={
                    cantidad:""
                };
                $scope.agregarProducto = function () {
                    $scope.nuevoProductoPedido.cantidad = $scope.productoCantidad;
                };
                $scope.getProductos();
            }]);

