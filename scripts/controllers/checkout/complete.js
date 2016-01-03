'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CheckoutCompleteCtrl
 * @description
 * # CheckoutCompleteCtrl
 * Controller of the winestoryApp
 */

app.controller('CheckoutCompleteCtrl', function ($scope, ngCart, $cookies, $rootScope, 
                                          UserService2, CartService, $location) {
    UserService2.user(function(data){});
    $scope.complete = $rootScope.complete;
    $rootScope.complete = null;
    
    $scope.to2decimal = function (raw_value){
        return Number(raw_value).toFixed(2);   
    }
    
    $scope.getShipping = function(){
        if($scope.complete != null){
            if($scope.complete.shipping_cost != 0){
                return '$' + $scope.to2decimal($scope.complete.shipping_cost);
            }else{
                return 'Free';   
            }
        }
    }
});

