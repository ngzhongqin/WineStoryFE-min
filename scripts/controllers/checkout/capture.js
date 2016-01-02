'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CheckoutCaptureCtrl
 * @description
 * # CheckoutCaptureCtrl
 * Controller of the winestoryApp
 */

app.controller('CheckoutCaptureCtrl', function ($scope, ngCart, $cookies, $rootScope,
                                                 AlertBoxService,
                                          UserService2, CartService, $location) {
     AlertBoxService.hideAlerts();
    ngCart.setTaxRate(7);
    ngCart.setShipping(20);
    
    UserService2.user(function(data){});
    $scope.ngCart = ngCart;
    
    
    
    $scope.isCartEmpty = function(){
        if(ngCart.isEmpty()){
            $location.path('/store');
        }
        return ngCart.isEmpty();   
    }
    
    UserService2.getUserAddress(function(data) {
        if(data!=null){
            $scope.checkout.name = data.full_name;
            $scope.checkout.email = data.email;
            $scope.checkout.address = data.address;
            $scope.checkout.postal_code = data.postal_code;
            $scope.checkout.mobile = data.mobile;
        }
    }); 
    
    $scope.review_order = function(){
        console.log("CheckoutCaptureCtrl - review_order clicked on");
        CartService.prep_cart(ngCart,$scope.checkout,function(data){
        
        });
    }
    
});

