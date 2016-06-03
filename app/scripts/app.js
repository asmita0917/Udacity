'use strict';

/**
 * @ngdoc overview
 * @name myPortfolioApp
 * @description
 * # myPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('myPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      /*.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })*/
      .when('/about', {
        templateUrl: 'views/About.html',
        controller: 'AboutCtrl',
        controllerAs: 'education'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
