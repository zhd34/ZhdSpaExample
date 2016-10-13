(function (app) {
    'use strict';

    app.controller('placeOrderCtrl', placeOrderCtrl);

    placeOrderCtrl.$inject = ['$scope', '$rootScope', '$location', '$modalInstance'];
    function placeOrderCtrl($scope, $rootScope, $location, $modalInstance) {
        
        $scope.placeOrderViewModel = {
            product: $scope.product,
            quality: 1
        };

        $scope.validateQuality = function () {
            if ($scope.placeOrderViewModel.quality > 0) {
                return true;
            } else {
                return 'Quality has to be greater than 0';
            }
        }

        $scope.placeOrder = function () {
            $rootScope.Orders.placeOrder({
                product: {
                    id: $scope.product.id,
                    name: $scope.product.name,
                    price: $scope.product.price
                },
                quality: $scope.placeOrderViewModel.quality
            });
            $modalInstance.dismiss();
            $location.url('/orders');
        }
    }
})(angular.module('ZhdSpa'));