
/**
 * @ngdoc object
 * @name estudios.config
 * @requires ng.$stateProvider
 * @description Defines the routes and other config within the estudios module
 */
angular
        .module('manager')
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('main.manager', {
                            url: 'manager',
                            views: {
                                home: {
                                    templateUrl: 'modules/manager/views/home.html',
                                    controller: 'ManagerHomeController'
                                }
                            }
                        })
                        .state('main.loginManager', {
                            url: 'manager/login',
                            views: {
                                home: {
                                    templateUrl: 'modules/manager/views/login.html',
                                    controller: 'LoginManagerController'
                                }
                            }
                        });
            }]);
