angular.module('ping').directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/games/game/game.html',
    controller: function($scope, $meteor, $stateParams) {
      $scope.game = Games.findOne({name: $stateParams.gameName});
    }
  };
});
