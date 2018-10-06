
angular
        .module('manager')
        .controller('ManagerNavbarController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster', '$http', '$httpParamSerializerJQLike',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster, $http, $httpParamSerializerJQLike) {
                console.log("navbar");
            }]);