(function (app) {
    app.controller('editProductCtrl', editProductCtrl);

    editProductCtrl.$inject = ['$scope', '$rootScope', '$location', '$routeParams', 'membershipService'];
    function editProductCtrl($scope, $rootScope, $location, $routeParams, membershipService) {
        var productId = $routeParams.id;
        $scope.productViewModel = $rootScope.Products.getProduct(productId);

        $scope.editProduct = function () {
            var edittedProduct = {
                id: $scope.productViewModel.id,
                name: $scope.productViewModel.name,
                price: $scope.productViewModel.price
            };

            $rootScope.Products.editProduct(edittedProduct);
            $location.url('/products');
        }
    }
})(angular.module('ZhdSpa'));