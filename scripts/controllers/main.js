'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the winestoryApp
 */
angular.module('winestoryApp')
  .controller('MainCtrl', function (UserService2,AlertBoxService) {
    AlertBoxService.hideAlerts();
    UserService2.user(function(data){});
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
