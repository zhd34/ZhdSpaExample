(function (app) {
    'use strict';

    app.controller('ordersCtrl', ordersCtrl);

    ordersCtrl.$inject = ['$scope', '$rootScope', '$modal', 'membershipService'];
    function ordersCtrl($scope, $rootScope, $modal, membershipService) {

        $scope.membershipService = membershipService;

        $scope.orderList = $rootScope.Orders.orderList;

        $scope.deleteOrder = function (id) {
            $modal.open({
                templateUrl: '/scripts/Spa/layout/modal.html',
                controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                    $scope.confirm = true;
                    $scope.title = 'Confirm Delete Order';
                    $scope.content = 'Are you sure you want to delete this order?';

                    $scope.confirmYes = function () {
                        $rootScope.Orders.deleteOrder(id);
                        $modalInstance.dismiss();
                    }

                    $scope.confirmNo = function () {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }
    }
})(angular.module('ZhdSpa'));