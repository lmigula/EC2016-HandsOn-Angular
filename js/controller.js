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
    var updateData = function() {
  bookmarkString = localStorage.bookmarks;
  if (bookmarkString) {
    bookmarks = bookmarkString.split(',')
  }
  var favList = Sessions.getFavs(bookmarks);
  $scope.favList = favList;
};

  updateData();
    $scope.unbookmark = function(id) {
    if (bookmarks) {
      var idx = bookmarks.indexOf(id);
      if (idx >= 0) {
        bookmarks.splice(idx, 1);
      }
      localStorage.bookmarks = bookmarks;
      updateData();
    }

  };

  $scope.getPdf = function() {
     console.log("start");
     var specialElementHandlers = {
       '#editor': function(element, renderer) {
         return true;
       }
     };
     var doc = new jsPDF();

     doc.fromHTML($('#render_me').get(0), 15, 15, {
       'width': 170,
       'elementHandlers': specialElementHandlers
     });
     doc.save('favs.pdf');
   };



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
      if (!bookmarks) {
        bookmarks = new Array();
      }
      if (bookmarks.indexOf(id) < 0) {
        bookmarks.push(id)
      }
      localStorage.bookmarks = bookmarks;
    }
    $scope.unbookmark = function() {
      if (!bookmarks) {
        bookmarks = new Array();
      }
      var idx = bookmarks.indexOf(id);
      if (idx >= 0) {
        bookmarks.splice(idx, 1);
      }
      localStorage.bookmarks = bookmarks;
    }

    $scope.isBookmark = function() {
      var result = false
      if (bookmarks) {
        result = bookmarks.indexOf(id) >= 0;
      }
      return result;
    }
  }])
  .controller('InfoController', ['$scope', function($scope) {

  }]);
