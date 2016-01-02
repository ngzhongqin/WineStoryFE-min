app.service('OrderService',['$http','$cookies','$rootScope', '$location', 'AlertBoxService',
                           function($http,$cookies,$rootScope,$location,AlertBoxService){

    this.submit_order = submit_order;
                                                           
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

            $rootScope.code = data.returnStatus.code;
            $rootScope.message = data.returnStatus.message;           
            AlertBoxService.showAlert(data.returnStatus.colour);
            
            if(data.returnStatus.code=="ORD-100"){
                ngCart.init();
            }
            
        });
    };
                               
                               
                            
}]);
