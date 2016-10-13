(function (app) {
    'use strict';

    app.factory('membershipService', membershipService);

    membershipService.$inject = ['$http', '$rootScope', '$cookieStore'];

    function membershipService($http, $rootScope, $cookieStore) {
        var service = {
            getCurrentUser: getCurrentUser,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn
        };

        function login(user) {
            if (user.userName == 'admin' && user.password == '123123') {
                $rootScope.repository = {
                    currentUser: {
                        userName: user.userName
                    }
                };
                $cookieStore.put('repository', $rootScope.repository);
            }
        }
        function logout() {
            $rootScope.repository = {};
            $cookieStore.remove('repository');
        }

        function getCurrentUser() {
            $rootScope.repository = $cookieStore.get('repository') || {};
            return $rootScope.repository.currentUser;
        }

        function isLoggedIn() {
            return $rootScope.repository.currentUser != null;
        }

        return service;
    }
})(angular.module('common.core'));