angular.module('simpleApp', [
    ])
    .controller('simpleController', ['$scope', function($scope) {
       var values = 'bar';
       $scope.values= values;
       
  }])
  .controller('secondSimpleController', ['$scope', function($scope) {
       var values  = 'foo';
     
       $scope.values= values;
       
  }])
    .controller('firstController', ['$scope', function($scope) {
       var values = {};
       values.key = 'fooo';
       return{
           values: values
       }
  }])
   .controller('secondController', ['$scope', function($scope) {
       var values = {};
       values.key = 'bar';
       return{
           values: values
       }
  }]);