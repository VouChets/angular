

/**
 * @ngdoc service
 * @name core.Services.Requestinterceptor
 * @description Requestinterceptor Service
 */
angular
        .module('main')
        .factory('RequestInterceptor', ['$injector', '$q', '$rootScope', '$location','$sessionStorage',
            function ($injector, $q, $rootScope, $location,$sessionStorage) {
                var requestInterceptor = {
                    request: function (config) {
                        if(!angular.isUndefined($sessionStorage.auth)){
                            config.headers.Authotization =$sessionStorage.auth;
                        }
                        return config;
                    },
                    response: function (response) {
                        if (response.headers()['content-type'] === "application/json;charset=UTF-8") {
                            return response;
                        } else {
                            return response;
                        }
                    },
                    responseError: function (response) {
                        var message = "(" + response.status + ") - ";

                        switch (response.status) {
                            case 401 :
                                break;
                            case 498 :
                                message += response.statusText;
                                break;
                            case 500 :
                                break;
                            case 503 :
                                break;
                            default:
                                message += response.statusText;
                                //toaster.error(message , "Error", opts);
                                break;
                        }
                        return $q.reject(response);

                    }
                };
                return requestInterceptor;
            }
        ]);
angular
        .module('main')
        .config(['$httpProvider', function ($httpProvider) {
                $httpProvider.interceptors.push('RequestInterceptor');
            }]);

