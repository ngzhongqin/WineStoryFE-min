app.service('AlertBoxService',['$http','$cookies','$rootScope', 
                               function($http,$cookies,$rootScope){
    
    this.showAlert = showAlert;
    this.showAlertForever = showAlertForever;
    this.hideAlerts = hideAlerts;
    
    function showAlert(colour){
        console.log("AlertBoxService - showAlert colour-"+colour); 
        if(colour == 'R'){
            showRed();
        }else{
            if(colour == 'G'){
                showGreen(); 
            }
        }
    }
    
    function showGreen(){
//        console.log("AlertBoxService - showGreen"); 
        $(".greenbox").show();
        $(".redbox").hide();
        $(".greenbox").fadeIn(50);
        setTimeout(function(){ 
             $(".greenbox").fadeOut(500);
        }, 2000);
    };
    
    function showRed(){
//        console.log("AlertBoxService - showRed"); 
        $(".redbox").show();
        $(".greenbox").hide();
        $(".redbox").fadeIn(50);
        setTimeout(function(){ 
             $(".redbox").fadeOut(500);
        }, 2000);
    };
                                   
   function showAlertForever(colour){
        console.log("AlertBoxService - showAlertForever colour-"+colour); 
        if(colour == 'R'){
            showRedForever();
        }else{
            if(colour == 'G'){
                showGreenForever(); 
            }
        }
    }
                                   
   function showGreenForever(){
        $(".greenbox").show();
        $(".redbox").hide();
        $(".greenbox").fadeIn(50);
    };
    
    function showRedForever(){
        $(".redbox").show();
        $(".greenbox").hide();
        $(".redbox").fadeIn(50);
    };
                                   
    function hideAlerts(){
        $(".redbox").hide();
        $(".greenbox").hide();
    };
    
}]);