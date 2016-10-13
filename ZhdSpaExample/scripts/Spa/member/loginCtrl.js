(function (app) {
    'use strict';

    app.controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', 'membershipService', '$location', '$route', '$rootScope'];

    function loginCtrl($scope, membershipService, $location, $route, $rootScope) {
        $scope.loginResult = {
            visible: false,
            message: ''
        };
        $scope.loginViewModel = {
            userName: '',
            password: ''
        };

        $scope.login = function () {
            $scope.loginResult.visible = false;
            membershipService.login({
                userName: $scope.loginViewModel.userName,
                password: $scope.loginViewModel.password
            });

            var isLoggedIn = membershipService.isLoggedIn();
            if (isLoggedIn) {
                // redirect back to where it was
                var previousState = $rootScope.previousState;
                $location.url(previousState);
            } else {
                $scope.loginResult.visible = true;
                $scope.loginResult.message = 'Incorrect user name or password.';
            }
        }
    }
})(angular.module('ZhdSpa'));
