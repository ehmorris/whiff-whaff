var dasherize = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
};

Games = new Mongo.Collection('games');

if (Meteor.isClient) {
  angular.module('ping-pong', ['angular-meteor']);

  angular.module('ping-pong').controller('GamesCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.games = $meteor.collection(Games);

    Router.route('/group/:name', function() {
      var selectedGame = $scope.games.findOne({ name: this.params.name });
      $scope.currentGame = selectedGame;
    });

    $scope.addGame = function(newGame) {
      newGame.name = dasherize(newGame.name);

      $scope.games.push(newGame);

      $scope.currentGame = newGame;

      history.pushState(newGame, '', newGame.name);
    };
  }]);
}
