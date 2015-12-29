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
        if (!this.game.teamOne) {
          this.game = Games.findOne({name: this.game.name});

          Games.update({ _id: this.game._id }, {
            $set: {
              teamOne: {score: 0},
              teamTwo: {score: 0}
            }
          });
        }

        var new_score = this.game[team].score + amount;
        var update_object = {};
        update_object[team] = {score: new_score};

        Games.update({ _id: this.game._id }, {
          $set: update_object
        });
      };
    }
  };
});
