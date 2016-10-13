(function (app) {
    'use strict';

    app.directive('memberLogin', memberLogin);

    function memberLogin () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/scripts/Spa/layout/memberLogin.html',
            controller: ['$scope', '$rootScope', 'membershipService', function ($scope, $rootScope, membershipService) {

                $scope.membershipService = membershipService;
                
                $scope.loginResult = {
                    visible: false,
                    message: ''
                };

                $scope.loginViewModel = {
                    userName: '',
                    password: null,
                };

                $scope.login = function () {
                    membershipService.login($scope.loginViewModel);

                    if (!membershipService.isLoggedIn()) {
                        $scope.loginResult.visible = true;
                        $scope.loginResult.message = 'Incorrect user name or password. Please use "admin" as username and "123123" as password';
                    }
                }

                $scope.logout = function () {
                    membershipService.logout();
                }

                $scope.isLoggedIn = function () {
                    return membershipService.isLoggedIn();
                }
            }]
        }
    }

})(angular.module('common.ui'));