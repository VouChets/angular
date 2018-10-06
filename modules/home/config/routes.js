
/**
 * @ngdoc object
 * @name estudios.config
 * @requires ng.$stateProvider
 * @description Defines the routes and other config within the estudios module
 */
angular
        .module('home')
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('main.home', {
                            url: 'home',
                            views: {
                                home: {
                                    templateUrl: 'modules/home/views/layout.html'
                                }
                            }
                        })
                        .state('main.home.principal', {
                            url: '/inicio',
                            views: {
                                layout: {
                                    templateUrl: 'modules/home/views/home.html',
                                    controller: 'HomeController'
                                }
                            }
                        });
            }]);
