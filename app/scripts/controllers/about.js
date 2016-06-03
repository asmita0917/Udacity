/**
 * Created by alokranjan on 5/21/16.
 */

'use strict';

/**
 * @ngdoc function
 * @name myPortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPortfolioApp
 */
angular.module('myPortfolioApp')
  .controller('AboutCtrl', function ($scope) {

      $scope.classcall= function classcall(){
        console.log('call done');
        if(document.getElementById('menu').className === 'menu'){

          document.getElementById('menu').className = 'menu nav--on';

        }else if(document.getElementById('menu').className === 'menu nav--on'){
          document.getElementById('menu').className = 'menu';
        }
      };
  });
