'use strict';

angular
        .module('home')
        .controller("ModalNuevaUnidadMedidaController", ["$scope", "$uibModalInstance", "$rootScope", '$localStorage', 'CommonResource', '$sessionStorage', '$filter','toaster', 
        function ($scope, $uibModalInstance, $rootScope, $localStorage, CommonResource, $sessionStorage, $filter,toaster) {
                $scope.cerrarModal = function () {
                    $uibModalInstance.close();
                };
                $scope.unidadMedida = {
                    codigo:"",
                    descripcion:""
                };
                $scope.opciones={
                    comando:"setUnidadMedida",
                    unidadMedida:$scope.unidadMedida
                };
                $scope.setUnidadMedida=function(){
                   new CommonResource($scope.opciones).$postComando(function (response) {
                        if(response.success=="1"){
                            $scope.cerrarModal();
                        }else{
                            toaster.pop('error', "Error",response.mensaje,8000);
                        }
                    });
                };
            }]);

