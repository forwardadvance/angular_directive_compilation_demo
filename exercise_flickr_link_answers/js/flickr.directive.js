// Start point for the Flickr Directive exercise
// http://www.forwardadvance.com/angular/directive-compilation
(function() {

  angular.module('flickr')
    .directive('flickr', FlickrDirective)

  function FlickrDirective() {
    return {
      controller: FlickrController,
      template: template,
      scope: true,
      link: linkFunction
    }
  }

  function FlickrController($scope, flickrService) {
    $scope.getFeed = function(tag) {
      $scope.status = "loading...";
      flickrService.getTag(tag)
        .then(function(response) {
          $scope.feed = response.data
          delete($scope.status);
        })
        .catch(function() {
          $scope.status = "failed";
        });
    }
    $scope.$watch('tag', $scope.getFeed);
  }

  function linkFunction(scope, el, attrs) {
    scope.tag = attrs.tag;
  }

  var template = [
    '<div>',
      '<h1 ng-show="feed">{{feed.title}}</h1>',
      '<h1 ng-hide="feed">Search Flickr</h1>',
      '<input ng-model="tag" ng-change="getFeed(tag)" ng-model-options="{debounce:500}" placeholder="search by tag" />',
      '<div class="loading" ng-show="status">',
        'Loading...',
      '</div>',
      '<ul>',
        '<li ng-repeat="item in feed.items">',
          '<a href="{{item.link}}">',
            '<img ng-src="{{item.media.m}}" alt="{{item.title}}"/>',
          '</a>',
        '</li>',
      '</ul>',
    '</div>'
  ].join('');

})();
