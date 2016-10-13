(function (app) {
    'use strict';

    app.factory('dataService', dataService);

    dataService.$inject = ['$http', 'uuid2', 'commonService', '$cookieStore'];

    function dataService($http, uuid2, commonService, $cookieStore) {
        var service = {
            products: products,
            orders: orders
        };

        function products() {
            var productId = 0;
            return {
                productList: $cookieStore.get('products') || [],
                addProduct: function (product) {
                    productId++;
                    this.productList.push({
                        id: productId,
                        name: product.name,
                        price: product.price
                    });
                    $cookieStore.put('products', this.productList);
                },
                getProduct: function (id) {
                    var product;
                    angular.forEach(this.productList, function (value, key) {
                        if (value.id == id) {
                            product = value;
                        }
                    });
                    return product;
                },
                editProduct: function (product) {
                    angular.forEach(this.productList, function (value, key) {
                        if (value.id == product.id) {
                            value.name = product.name;
                            value.price = product.price;
                        }
                    });
                },
                deleteProduct: function (id) {
                    var product = this.getProduct(id);
                    var index = this.productList.indexOf(product);
                    this.productList.splice(index, 1);
                },
                removeAll: function () {
                    $cookieStore.put('products', []);
                }
            }
        }

        function orders() {
            return {
                orderList:  $cookieStore.get('orders') || [],
                placeOrder: function (order) {
                    this.orderList.push({
                        id: (!order.id) ? uuid2.newuuid() : order.id,
                        product: order.product,
                        quality: order.quality,
                        date: commonService.util.getCurrentDateTime()
                    });
                    $cookieStore.put('orders', this.orderList);
                },
                viewOrder: function (id) {
                    var order;
                    angular.forEach(this.orderList, function (value, key) {
                        if (value.id == id) {
                            order = value;
                        }
                    });
                    return order;
                },
                deleteOrder: function (id) {
                    var order = this.viewOrder();
                    var index = this.orderList.indexOf(order);
                    this.orderList.splice(index, 1);
                },
                removeAll: function () {
                    $cookieStore.put('orders', []);
                }
            }
        }

        return service;
    }
})(angular.module('common.core'));