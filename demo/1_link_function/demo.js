// * controller
// * link function
// * link function can touch DOM
// * link function can get attributes
// * link function can write to $scope
// * Using self executing function


(function() {

  var Controller = function($scope) {
    $scope.hello = "Hey there User!";
    // $scope.$watch('::uid', function() {
    //   userService.get($scope.uid)
    // })
  };

  var link = function(scope, el, attrs, controller) {
    var exp  = attrs.uid
    scope.$watch(exp, function(current, last) {
      scope.uid = current;
    })
  };

  angular.module('app', [])
    .directive('userProfile', function() {
      return {
        controller: Controller,
        scope: true,
        link: link
      };
    });


})();

















// Initial state

// (function() {

//   var Controller = function($scope) {
//     $scope.hello = "Hey there User!"
//   }

//   angular.module('app', [])
//     .directive('userProfile', function() {
//       return {
//         controller: Controller,
//         scope: true
//       }
//     });


// })();
