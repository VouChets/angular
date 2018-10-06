
angular
        .module('home')
        .controller('ProductoController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster) {
                $scope.isMedidasCargadas = false;
                $scope.getUnidadesMedida = function () {
                    CommonResource.getComando({
                        comando: "getUnidadesMedida"
                    }).$promise.then(function (response) {
                        if (response.success == "1") {
                            $scope.vecUnidadesMedida = response.items;
                            $scope.isMedidasCargadas = true;
                        }
                    });
                };
                $scope.getUnidadesMedida();
                $scope.nuevoProducto = function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'modules/home/views/modalNuevoProducto.html',
                        controller: 'ModalNuevoProductoController',
                        scope: $scope
                    });
                    modalInstance.result.then(function (response) {
                        $scope.getProductos();
                    }, function () {
                    });
                };
                $scope.getProductos = function () {
                    CommonResource.getComando({
                        comando: "getProductos"
                    }).$promise.then(function (response) {
                        if (response.success == "1") {
                            $scope.vecProductos = response.items;
                        }
                    });
                };
                $scope.getProductos();
                $scope.getUnidadesMedida();
            }]);