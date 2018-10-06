
angular
        .module('manager')
        .controller('LoginManagerController', ['$scope', '$rootScope', '$state', '$location', '$sessionStorage', '$uibModal', '$filter', 'CommonResource', 'toaster',
            function ($scope, $rootScope, $state, $location, $sessionStorage, $uibModal, $filter, CommonResource, toaster) {

                $scope.auth = {
                    email: "admin@admin.com",
                    password: "minarllejas",
                    getToken: true
                };
                $scope.login = function () {
                    var json = {
                        "json": JSON.stringify($scope.auth)
                    };
                    new CommonResource(json).$login(function (response) {
                        if (angular.isUndefined(response.token)) {
                            //error;
                        } else {
                            $sessionStorage.auth = response.token;
                            $state.go('main.manager');
                            $sessionStorage.user = {
                                email: "admin@admin.com"
                            };

                        }
                    });
                };
            }]);