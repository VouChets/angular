

angular
        .module('login')
        .controller('LogoutController', ['$scope', '$rootScope', '$state', '$sessionStorage', '$uibModal', '$location', '$window','CommonResource', 
    function ($scope, $rootScope, $state, $sessionStorage, $uibModal, $location, $window,CommonResource) {
               $sessionStorage.usuario="";
               $state.go("main.login");
            }]);

