'use strict';

/**
 * @ngdoc overview
 * @name angAppApp
 * @description
 * # angAppApp
 *
 * Main module of the application.
 */
angular
  .module('angAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dragu', {
         template: '<first></first>'
      })
      .otherwise({
        redirectTo: '/'
      });
 $locationProvider.hashPrefix('');

  });
