angular.module('ping').directive('newGame', function() {
  var dasherize = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  };

  return {
    restrict: 'E',
    templateUrl: 'client/games/new-game/new-game.html',
    controller: function($scope, $state, $meteor) {
      $scope.games = $meteor.collection(Games);

      $scope.addGame = function(newGame) {
        newGame.name = dasherize(newGame.name);
        $scope.games.push(newGame);
        $state.go('game', {gameName: newGame.name});
      };
    }
  };
});
