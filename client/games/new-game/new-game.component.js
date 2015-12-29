angular.module('whiffWhaff').directive('newGame', function() {
  var dasherize = function(string) {
    return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  };

  return {
    restrict: 'E',
    templateUrl: 'client/games/new-game/new-game.html',
    controllerAs: 'gamesCtrl',
    controller: function($scope, $state, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({
        games: function() {
          return Games.find({});
        }
      });

      var defaultGame = {
        teamOne: {score: 0},
        teamTwo: {score: 0}
      };

      this.addGame = function(newGame) {
        newGame.name = dasherize(newGame.name);
        Games.insert(angular.extend(newGame, defaultGame));
        $state.go('game', {gameName: newGame.name});
      };
    }
  };
});
