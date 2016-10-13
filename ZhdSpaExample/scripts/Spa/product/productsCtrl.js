(function (app) {
    'use strict';

    app.controller('productsCtrl', productsCtrl);

    productsCtrl.$inject = ['$scope', '$rootScope', '$modal', 'membershipService'];
    function productsCtrl($scope, $rootScope, $modal, membershipService) {
        $scope.productList = $rootScope.Products.productList;
        $scope.currentPage = 'Products';
        $scope.membershipService = membershipService;

        $scope.deleteProduct = function (id) {
            $modal.open({
                templateUrl: '/scripts/Spa/layout/modal.html',
                controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                    $scope.confirm = true;
                    $scope.title = 'Confirm Delete Product';
                    $scope.content = 'Are you sure you want to delete this product?';

                    $scope.confirmYes = function () {
                        $rootScope.Products.deleteProduct(id);
                        $modalInstance.dismiss();
                    }

                    $scope.confirmNo = function () {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }

        $scope.placeOrder = function (id) {
            $scope.product = $rootScope.Products.getProduct(id);
            $modal.open({
                templateUrl: '/scripts/Spa/order/placeOrder.html',
                controller: 'placeOrderCtrl',
                scope: $scope
            });
        }
    }
})(angular.module('ZhdSpa'));