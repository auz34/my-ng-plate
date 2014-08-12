'use strict';

/**
 * @ngdoc directive
 * @name appVersion
 */

angular.module('app').directive('appVersion', function(version) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            element.text(version);
        }
    };
});
