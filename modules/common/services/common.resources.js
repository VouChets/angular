angular
        .module('common')
        .factory('CommonResource',
                function ($resource, ENV) {
                    var url = ENV.endpoint.url;
                    var urlPost = ENV.endpoint.urlPost;
                    var urlDetalle = ENV.endpoint.urlDetalle;
                    return $resource(ENV.endpoint.url, {}, {
                        getComando: {
                            url: ENV.endpoint.url + ":comando",
                            method: "GET",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        postComando: {
                            url: urlPost,
                            method: "POST",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        login: {
                            url: urlPost + "login",
                            method: "POST",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        getSections: {
                            url: ENV.endpoint.url + "sections",
                            method: "GET",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        getPosts: {
                            url: ENV.endpoint.url + "posts",
                            method: "GET",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        setPost:{
                            url: urlPost + "posts",
                            method: "POST",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        updatePost:{
                            url: urlPost + "posts/:id",
                            method: "PUT",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        },
                        setImage:{
                            url: urlPost +"posts/imagen",
                            method: "POST",
                            isArray: false,
                            transformResponse: function (data) {
                                var response = angular.fromJson(data);
                                return response;
                            }
                        }
                    });
                });