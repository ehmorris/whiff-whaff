var dasherize = function(string) {
  return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
};

Games = new Mongo.Collection('games');

if (Meteor.isClient) {
  angular.module('ping', ['angular-meteor']);

  angular.module('ping').controller('GamesCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.games = $meteor.collection(Games);

    $scope.addGame = function(newGame) {
      newGame.name = dasherize(newGame.name);

      $scope.games.push(newGame);
    };
  }]);
}
