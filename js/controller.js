angular.module('ecApp.controllers', [])
  .controller('ListController', ['$scope', 'Sessions', function($scope, Sessions) {
    Sessions.all()
      .then(function(sessions) {
        $scope.sessionList = sessions;
      });

  }])
  .controller('FavoriteController', ['$scope', 'Sessions', function($scope, Sessions) {
    var bookmarkString;
    var bookmarks;


  }])
  .controller('sessionDetailsController', ['$scope', '$routeParams', 'Sessions', function($scope, $routeParams, Sessions) {
    var id = $routeParams.id;
    var detailSession = Sessions.get(id);
    $scope.session = detailSession;
    var bookmarkString = localStorage.bookmarks;
    var bookmarks;
    if (bookmarkString) {
      bookmarks = bookmarkString.split(',')
    }
    $scope.bookmark = function() {

    }
    $scope.unbookmark = function() {

    }

    $scope.isBookmark = function() {

    }
  }])
  .controller('InfoController', ['$scope', function($scope) {

  }]);
