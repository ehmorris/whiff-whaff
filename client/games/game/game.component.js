angular.module('whiffWhaff').directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/games/game/game.html',
    controller: function($scope, $stateParams, $meteor) {
      debugger;
      $scope.game = $meteor.collection(Games.findOne({name: $stateParams.gameName}));

      $scope.addScore = function(amount, team) {
        if (!$scope.game._id) {
          $scope.game = $meteor.collection(Games.findOne({name: $scope.game.name}));

          $scope.game.teamOne = {score: 0};
          $scope.game.teamTwo = {score: 0};
        }

        $scope.game[team].score += amount;
      };
    }
  };
});
