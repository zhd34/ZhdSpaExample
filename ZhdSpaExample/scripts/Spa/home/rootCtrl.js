(function (app) {
    'use strict';

    app.controller('rootCtrl', rootCtrl);

    rootCtrl.$inject = ['$scope', '$route'];
    function rootCtrl($scope, $route) {
        $scope.$route = $route;
    }
})(angular.module('ZhdSpa'));