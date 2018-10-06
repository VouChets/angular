
angular
        .module('home')
        .controller('UnidadesMedidasController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster) {
                $scope.nuevaUnidadMedida = function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'modules/home/views/modalNuevaUnidadMedida.html',
                        controller: 'ModalNuevaUnidadMedidaController'
                    });
                    modalInstance.result.then(function (response) {
                        $scope.getUnidadesMedida();
                    }, function () {
                    });
                };
                $scope.getUnidadesMedida = function () {
                    CommonResource.getComando({
                        comando: "getUnidadesMedida"
                    }).$promise.then(function (response) {
                        if (response.success == "1") {
                            $scope.vecUnidadesMedida = response.items;
                        }
                    });
                };
                $scope.getUnidadesMedida();
            }]);