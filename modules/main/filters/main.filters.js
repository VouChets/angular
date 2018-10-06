'use strict';
/**
 * @ngdoc service
 * @name core.Services.Loginresource
 * @description Loginresource Factory
 */

angular
        .module('main')
        .filter("tieneWhatsapp", function () {
            return function (aux) {
                var ban = false;
                if (aux == 1) {
                    ban = true;
                }
                return ban;
            };
        })
        .filter("acentos", function () {
            return function (aux) {
                a = "";
                if (!angular.isUndefined(aux)) {
                    var re = /&aacute;/gi;
                    var a = aux.replace(re, "á");
                    re = /&eacute;/gi;
                    a = a.replace(re, "é");
                    re = /&iacute;/gi;
                    a = a.replace(re, "í");
                    re = /&oacute;/gi;
                    a = a.replace(re, "ó");
                    re = /&uacute;/gi;
                    a = a.replace(re, "ú");
                    re = /&ntilde;/gi;
                    a = a.replace(re, "ñ");
                }
                return a;
            };
        });