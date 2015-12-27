angular.module('whiffWhaff').directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/games/game/game.html',
    controller: function($scope, $stateParams) {
      $scope.game = Games.findOne({name: $stateParams.gameName}) || {name: $stateParams.gameName};
    }
  };
});
