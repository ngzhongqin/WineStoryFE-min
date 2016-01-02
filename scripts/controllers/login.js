'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the winestoryApp
 */

app.controller('LoginCtrl', function ($scope, $rootScope, $http, $cookies, 
                                       $location, LoginService, AlertBoxService) {
    AlertBoxService.hideAlerts();
	$scope.submitPost = function () {
        LoginService.login($scope.login.email,$scope.login.password,function(data){});
	};

});