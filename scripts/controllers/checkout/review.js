'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CheckoutReviewCtrl
 * @description
 * # CheckoutReviewCtrl
 * Controller of the winestoryApp
 */

app.controller('CheckoutReviewCtrl', function ($scope, ngCart, $cookies, $rootScope,
                                             OrderService, SpinnerService,
                                          UserService2, CartService, $location) {
    ngCart.setTaxRate(7);
    ngCart.setShipping(20);
    
    UserService2.user(function(data){});
    
//    $scope.key='pk_test_TqJOP2pwqV8UkJCfTDqDAvtb';
//    $scope.store_name = 'WineStory.sg';
//    $scope.amount = ngCart.totalCost() * 100;
//    $scope.item = 'Bottle of Wine';
    
    
    
    Stripe.setPublishableKey('pk_test_TqJOP2pwqV8UkJCfTDqDAvtb');

      $scope.handleStripe = function(status, response){
          SpinnerService.showSpinner();
          console.log("reponse: ");
        if(response.error) {
          // there was an error. Fix it.
            console.log("reponse: error");
            
            $rootScope.code = "STP-900";
            $rootScope.message = response.error;           
            AlertBoxService.showAlert("R");
            
        } else {
          // got stripe token, now charge it or smt
          var token = response.id
          
          console.log("reponse: token:"+token);
            OrderService.submit_order(token,ngCart,$scope.review_order,function(data){
                if(data!=null){
                    
                }
            });
        }
      }
    
    
    $scope.review_order = CartService.getSavedReviewOrderData();
    console.log('ReviewOrderCtrl $scope.review_order='+$scope.review_order);
    if($scope.review_order == null){
        $location.path('/cart');   
    }else{
        $scope.items = $scope.review_order.items;
        $scope.review_order.city = 'Singapore';
        $scope.review_order.country = 'Singapore';
    }
    
    $scope.to2decimal = function (raw_value){
        return Number(raw_value).toFixed(2);   
    }
    
    $scope.getShipping = function(){
        if($scope.review_order != null){
            if($scope.review_order.shipping_cost != 0){
                return $scope.to2decimal($scope.review_order.shipping_cost);
            }else{
                return 'Free';   
            }
        }
    }
});

