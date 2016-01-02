app.service('OrderService',['$http','$cookies','$rootScope', '$location', 'AlertBoxService', 'SpinnerService',
                           function($http,$cookies,$rootScope,$location,AlertBoxService,SpinnerService){

    this.submit_order = submit_order;
    this.get_all_user_orders = get_all_user_orders;
                               
    function submit_order(token,ngCart,checkout,callback) {
        console.log("OrderService - SUBMIT_ORDER");
        var session_id = $cookies.get('winestory_session');
        var req_url = backendHostname+'/order?action=SUBMIT_ORDER'+'&'+'session_id='+session_id;
        console.log("OrderService - SUBMIT_ORDER");
                
        var data = {
            'token' : token,
            'ngCart' : ngCart,
            'checkout' : checkout
        };
        $http({
            url: req_url,
            method: 'POST',
            headers: {
                'Content-Type':  "text/plain"
            },
            data: {data: data}
        }).success(function (data, status, header, config){
            callback(data);
            SpinnerService.hideSpinner();
            
            $rootScope.code = data.returnStatus.code;
            $rootScope.message = data.returnStatus.message;           
            AlertBoxService.showAlertForever(data.returnStatus.colour);
            
            if(data.returnStatus.code=="ORD001-100"){
                AlertBoxService.hideAlerts();
                ngCart.init();
                $location.path('/checkout/complete');
            }
            
            
        });
    };
    
    function get_all_user_orders(callback) {
                 SpinnerService.showSpinner();       
        console.log("OrderService - GET_ALL_USER_ORDERS");
        var session_id = $cookies.get('winestory_session');
        var req_url = backendHostname+'/order?action=GET_ALL_USER_ORDERS'+'&'+'session_id='+session_id;
        console.log("OrderService - GET_ALL_USER_ORDERS");
        var data = {
        };
        $http({
            url: req_url,
            method: 'POST',
            headers: {
                'Content-Type':  "text/plain"
            },
            data: {data: data}
        }).success(function (data, status, header, config){
            callback(data);
            SpinnerService.hideSpinner();       

            $rootScope.code = data.returnStatus.code;
            $rootScope.message = data.returnStatus.message;           
            AlertBoxService.showAlert(data.returnStatus.colour);
            
        });
    };
                               
                            
}]);
