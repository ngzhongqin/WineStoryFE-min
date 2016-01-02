app.service('SpinnerService',['$http','$cookies','$rootScope', 
                               function($http,$cookies,$rootScope){
    
    this.showSpinner = showSpinner;
    this.hideSpinner = hideSpinner;
    
    function showSpinner(){
        console.log("SpinnerService - showAlert "); 
        $(".loading").show();
    }
                                   
   function hideSpinner(){
        console.log("SpinnerService - hideSpinner "); 
        $(".loading").hide();
    }
        
}]);