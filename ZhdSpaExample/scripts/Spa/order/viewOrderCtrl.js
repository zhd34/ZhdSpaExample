(function (app) {
    'use strict';

    app.controller('viewOrderCtrl', viewOrderCtrl);

    viewOrderCtrl.$inject = ['$scope', '$rootScope', '$routeParams'];

    function viewOrderCtrl($scope, $rootScope, $routeParams) {

        var orderId = $routeParams.id;
        var order = $rootScope.Orders.viewOrder(orderId);

        $scope.viewOrderViewModel = {
            id: order.id,
            product: {
                name: order.product.name,
                price: order.product.price
            },
            quality: order.quality,
            subtotal: function () {
                return order.quality * order.product.price;
            },
            date: order.date
        };
    }
})(angular.module('ZhdSpa'));
