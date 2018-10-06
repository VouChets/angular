angular
        .module('home')
        .filter("acentosssssss", function () {
            return function (text) {
                
                if (text != null) {
                    return text.substring(0, 1).toUpperCase() + text.substring(1);
                }
            };
        });