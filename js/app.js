// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ecApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ecApp.services' is found in services.js
// 'ecApp.controllers' is found in controllers.js
angular.module('ecApp', [
    'ngRoute',
    'ecApp.services',
    'ecApp.controllers',
    'ngSanitize'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
      templateUrl: 'tmpl/list.html',
      controller: 'ListController'
    })
    .when('/session/:id', {
      templateUrl: 'tmpl/session.html',
      controller: 'sessionDetailsController'
    })
    .when('/favorite', {
      templateUrl: 'tmpl/fav.html',
      controller: 'FavoriteController'
    })
    .when('/info', {
      templateUrl: 'tmpl/info.html',
      controller: 'InfoController'
    })
    .otherwise({
      redirectTo: '/list'
    });
  }])
  .filter('timeFilter', function() {
    return function(input) {
      switch (input) {
        case 1:
          return "11.03.2016 14:00 - 15:30"
          break;
        case 2:
          return "11.03.2016 16:00 - 17:30"
          break;
        case 3:
          return "12.03.2016 09:00 - 10:30"
          break;
        case 4:
          return "12.03.2016 11:00 - 12:30"
          break;
        case 5:
          return "12.03.2016 14:00 - 15:30"
          break;
        case 6:
          return "12.03.2016 16:00 - 17:30"
          break;
        case 7:
          return "13.03.2016 09:00 - 10:30"
          break;
        case 8:
          return "13.03.2016 11:00 - 12:30"
          break;
        default:

      }


    }
  });
