(function () {
    'use strict';

    var app = angular.module('ZhdSpa', ['common.core', 'common.ui']);

    app.config(config).run(run);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'productsCtrl',
                templateUrl: '/scripts/Spa/product/products.html',
                activeTab: 'products'
            })
            .when('/product/add', {
                controller: 'addProductCtrl',
                templateUrl: '/scripts/Spa/product/addProduct.html',
                activeTab: 'products',
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when('/product/edit/:id', {
                controller: 'editProductCtrl',
                templateUrl: '/scripts/Spa/product/editProduct.html',
                activeTab: 'products',
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when('/orders', {
                controller: 'ordersCtrl',
                templateUrl: '/scripts/Spa/order/orders.html',
                activeTab: 'orders'
            })
            .when('/orders/placeorder', {
                controller: 'placeOrderCtrl',
                templateUrl: '/scripts/Spa/order/placeOrder.html',
                activeTab: 'orders'
            })
            .when('/orders/vieworder/:id', {
                controller: 'viewOrderCtrl',
                templateUrl: '/scripts/Spa/order/viewOrder.html',
                activeTab: 'orders'
            })
            .when('/login', {
                controller: 'loginCtrl',
                templateUrl: '/scripts/Spa/member/login.html',
                activeTab: 'products'
            })
            .otherwise('/');
    }

    run.$inject = ['$rootScope', 'uuid2', 'commonService', '$cookieStore', '$http', 'dataService'];
    function run($rootScope, uuid2, commonService, $cookieStore, $http, dataService) {
        $rootScope.repository = $cookieStore.get('repository') || {};

        $rootScope.Products = dataService.products();
        $rootScope.Orders = dataService.orders();

        // pop test data
        if ($rootScope.Products.productList.length == 0) {
            $cookieStore.put('products', []);
            $cookieStore.put('orders', []);

            var product1 = function () {
                self = this;
                self.name = 'Chocolate',
                self.price = 4
            };
            var product2 = function () {
                self = this;
                self.name = 'Lollipop',
                self.price = 1
            };
            $rootScope.Products.addProduct(new product1());
            $rootScope.Products.addProduct(new product2());

            if ($rootScope.Orders.orderList.length == 0) {
                var order1 = function () {
                    self = this;
                    self.id = '8e6decb1-f9d9-497d-89ed-7521116fa47b';
                    self.product = $rootScope.Products.getProduct(1);
                    self.quality = 5;
                };
                $rootScope.Orders.placeOrder(new order1());
            }
        }
    }

    isAuthenticated.$inject = ['membershipService', '$location', '$rootScope'];
    function isAuthenticated(membershipService, $location, $rootScope) {
        if (!membershipService.isLoggedIn()) {
            $rootScope.previousState = $location.path();
            $location.path('/login');
        }
    }
})();