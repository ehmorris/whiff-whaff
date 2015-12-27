angular.module('whiffWhaff').directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/games/game/game.html',
    controller: function($scope, $stateParams, $meteor) {
      $scope.game = Games.findOne({name: $stateParams.gameName}) || {name: $stateParams.gameName};

      $scope.addScore = function(amount, team) {
        if (!$scope.game._id) {
          $scope.game = Games.findOne({name: $scope.game.name});

          Games.update({
            _id: $scope.game._id
          }, {
            $set: {
              teamOne: {score: 0},
              teamTwo: {score: 0}
            }
          });
        }

        var new_score = $scope.game[team].score + amount;
        var update_object = {};
        update_object[team] = {score: new_score};

        Games.update({
          _id: $scope.game._id
        }, {
          $set: update_object
        });
      };
    }
  };
});
