angular.module('whiffWhaff').directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/games/game/game.html',
    controllerAs: 'gameCtrl',
    controller: function($scope, $stateParams, $reactive, ngAudio) {
      $reactive(this).attach($scope);

      this.helpers({
        game: function() {
          return Games.findOne({name: $stateParams.gameName});
        }
      });

      this.gameUrl = window.location.origin + '/game/' + this.game.name;
      this.beep_on = ngAudio.load('/beep_on.ogg');
      this.beep_off = ngAudio.load('/beep_off.ogg');

      if (this.game.teamOne.score > 0 || this.game.teamTwo.score > 0) {
        this.hideIntro = true;
      }

      this.addScore = function(amount, team) {
        var update_object = {};
        update_object[team] = {score: this.game[team].score + amount};

        Games.update({ _id: this.game._id }, { $set: update_object });

        if (team === 'teamOne') this.beep_on.play();
        if (team === 'teamTwo') this.beep_off.play();
      };
    }
  };
});
