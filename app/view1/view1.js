'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.configuration = {
      settings : [
        {
          key: "switch1",
          label: "coffe ?",
          type: "boolean",
          value: true
        },
        {
          key: "switch2",
          label: "sugar ?",
          type: "boolean",
          value: false
        }        
      ]
    };
  }]);