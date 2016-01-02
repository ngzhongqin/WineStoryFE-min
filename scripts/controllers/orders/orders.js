'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the winestoryApp
 */

app.controller('OrdersCtrl', function ($scope, ngCart, $cookies, $rootScope, 
                                          UserService2, OrderService, $location) {
    
    UserService2.user(function(data){});
    
});

