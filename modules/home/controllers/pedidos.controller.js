
angular
        .module('home')
        .controller('PedidosController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster) {
                $scope.nuevoPedido = function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'modules/home/views/modalNuevoPedido.html',
                        controller: 'ModalNuevoPedidoController',
                        size:'lg'
                    });
                    modalInstance.result.then(function (response) {
                        $scope.getClientes();
                    }, function () {
                    });
                };
            }]);