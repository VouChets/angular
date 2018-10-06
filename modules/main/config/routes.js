
/**
 * @ngdoc object
 * @name estudios.config
 * @requires ng.$stateProvider
 * @description Defines the routes and other config within the estudios module
 */
angular
        .module('main')
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('main', {
                            url: '/',
                            views: {
                                layout: {
                                    templateUrl: 'modules/main/views/main.html',
                                    controller: 'MainController'
                                }
                            }
                        })
            }
        ]);
