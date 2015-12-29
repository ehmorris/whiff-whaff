angular.module('whiffWhaff').directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/games/game/game.html',
    controllerAs: 'gameCtrl',
    controller: function($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({
        game: function() {
          return Games.findOne({name: $stateParams.gameName});
        }
      });

      this.addScore = function(amount, team) {
        var update_object = {};
        update_object[team] = {score: this.game[team].score + amount};

        Games.update({ _id: this.game._id }, { $set: update_object });
      };
    }
  };
});
