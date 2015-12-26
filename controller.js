var dasherize = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
};

Games = new Mongo.Collection('games');

if (Meteor.isClient) {
  angular.module('ping', ['angular-meteor', 'ui.router']);

  angular.module('ping').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('newGame', {
      url: '/new-game',
      template: '<new-game></new-game>'
    });

    $urlRouterProvider.otherwise('/new-game');
  });

  angular.module('ping').directive('newGame', function() {
    return {
      restrict: 'E',
      templateUrl: 'new-game.html',
      controller: function($scope, $meteor) {
        $scope.games = $meteor.collection(Games);

        $scope.addGame = function(newGame) {
          newGame.name = dasherize(newGame.name);
          $scope.games.push(newGame);
        };
      }
    };
  });
}
