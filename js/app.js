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
  ;
