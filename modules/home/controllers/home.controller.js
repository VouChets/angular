
angular
        .module('home')
        .controller('HomeController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster) {
                $scope.irContactos=function(){
                   $state.go("main.home.contactos"); 
                };
                $scope.cerrarSesion=function(){
                    console.log("Cerrar sesion");
                };
                $scope.mensajes=[
                    {sitio:"test",contacto:"Cliente"},
                    {sitio:"test2",contacto:"Cliente2"},
                    {sitio:"test3",contacto:"Cliente3"}
                ];
            }]);