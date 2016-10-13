(function (app) {
    'use strict';

    app.directive('topBar', topBar);

    function topBar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/scripts/spa/layout/topbar.html'
        }
    }
})(angular.module('common.ui'));