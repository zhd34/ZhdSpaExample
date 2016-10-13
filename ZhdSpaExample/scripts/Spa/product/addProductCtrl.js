(function (app) {
    'use strict';

    app.controller('addProductCtrl', addProductCtrl);

    addProductCtrl.$inject = ['$scope', '$rootScope', '$location'];

    function addProductCtrl($scope, $rootScope, $location) {
        
        $scope.productViewModel = {
            id: 0, name: '', price: null
        };

        $scope.addProduct = function () {
            $rootScope.Products.addProduct({
                name: $scope.productViewModel.name,
                price: $scope.productViewModel.price,
            });

            $location.url('/products');
        }
    }
})(angular.module('ZhdSpa'));
