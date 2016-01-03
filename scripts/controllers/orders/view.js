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
    
    $scope.to2decimal = function (raw_value){
        return Number(raw_value).toFixed(2);   
    }
    
    $scope.getShipping = function(){
        if($scope.order != null){
            if($scope.order.shipping_cost != 0){
                return '$' + $scope.to2decimal($scope.order.shipping_cost);
            }else{
                return 'Free';   
            }
        }
    }
});

