(function (app) {
    'use strict';

    app.directive('tabBar', tabBar);

    function tabBar() {
        return {
            restict: 'E',
            replace: true,
            templateUrl: '/scripts/Spa/layout/tabBar.html'
        }
    }
})(angular.module('common.ui'));