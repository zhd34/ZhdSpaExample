(function (app) {
    'use strict';

    app.directive('topBar', topBar);

    function topBar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/scripts/spa/layout/topbar.html',
            controller: ['$rootScope', 'membershipService', '$location', function ($rootScope, membershipService, $location) {
                $rootScope.isLoggedIn = function () {
                    return membershipService.isLoggedIn();
                }
                $rootScope.loginTop = function () {
                    $location.url('/login');
                }
                $rootScope.logoutTop = function () {
                    membershipService.logout();
                }
            }]
        }
    }
})(angular.module('common.ui'));