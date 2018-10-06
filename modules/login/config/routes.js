
/**
 * @ngdoc object
 * @name estudios.config
 * @requires ng.$stateProvider
 * @description Defines the routes and other config within the estudios module
 */
angular
        .module('login')
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('main.login', {
                            url: 'login',
                            views: {
                                home: {
                                    templateUrl: 'modules/login/views/login.html',
                                    controller: 'LoginController'
                                }
                            }
                        }).state('main.login.logout',{
                            url: 'logout',
                            views: {
                                home: {
                                    templateUrl: 'modules/login/views/logout.html',
                                    controller: 'LogoutController'
                                }
                            }
                        })
            }
        ]);
