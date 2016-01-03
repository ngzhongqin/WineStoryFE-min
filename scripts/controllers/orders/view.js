'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:OrderViewCtrl
 * @description
 * # OrderViewCtrl
 * Controller of the winestoryApp
 */

app.controller('OrderViewCtrl', function ($scope, ngCart, $cookies, $rootScope, $routeParams,
                                          UserService2, OrderService, $location) {
    
    UserService2.user(function(data){});
    OrderService.view_order($routeParams.param1,function(data){
        $scope.order = data.data;
    });
});

