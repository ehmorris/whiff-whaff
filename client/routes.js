angular.module('whiffWhaff').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('newGame', {
      url: '/new-game',
      template: '<new-game></new-game>'
    })
    .state('game', {
      url: '/game/:gameName',
      template: '<game></game>'
    });

  $urlRouterProvider.otherwise('/new-game');
});
