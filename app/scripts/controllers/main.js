'use strict';

/**
 * @ngdoc function
 * @name myPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPortfolioApp
 */
angular.module('myPortfolioApp')
  .controller('MainCtrl', function ($scope,$http) {
    var data1 = '';

    function init(){


      $http.get('Data/data.json').then(function(response){

          data1 = response.data;

          $scope.htmlData = data1;
        }, function(response){
          console.log('not connected'+response.data);
        }

      );
    }
    init();
    $scope.redirectTo = function redirectTo(link) {
     // console.log('In redirect');
      window.location.href=link;
    };
    $scope.loadImg =function loadImg(id, imagePath) {
      //console.log('In loadImg ');
      document.getElementById(id).src = 'images/'+imagePath;
    };

    $scope.click1 = function click1(model){

      $http.get('Data/data.json').then(function(response){

          data1 = response.data;
          $scope.htmlData = data1;

          var imgSrc= model.img;

          var img1 = imgSrc.split(',');
          $scope.img2 =img1;

        var inStr = '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">';
          inStr = inStr + ' <ol class="carousel-indicators"> ';
        for( var i =0;i< img1.length;i++) {
          var cl = '';
          if ( i === 0 ) {
            cl = 'class="active" ';
          } else {
            cl = '';
          }
          inStr = inStr + '<li data-target="#carousel-example-generic" data-slide-to="'+i+'" ' + cl + '></li>';
        }
          inStr += '</ol>';
          inStr += '<div class="carousel-inner" > ';

          for( i =0;i< img1.length;i++) {
            var line1 = '';
            if ( i === 0) {
              line1= ' <div class="item active"> ';
            } else {
              line1 = ' <div class="item"> ';
            }
            inStr = inStr +
              line1 +
              '<img id="car-' + i + '" src="images/projectImages/'+img1[i] +'" alt="..."> ' +
              '<div class="carousel-caption"> ' +
              '<p id="car-title-' + i + '" class="text-model-title">'+model.title + '</p>' +
              '</div>' +
              '</div>';
        }
          inStr = inStr + '<a class="left carousel-control" data-target="#carousel-example-generic" role="button" data-slide="prev"> ' +
            '<span class="glyphicon glyphicon-chevron-left"></span>' +
            '</a> ' +
            '<a class="right carousel-control" data-target="#carousel-example-generic" role="button" data-slide="next">' +
            '<span class="glyphicon glyphicon-chevron-right"></span>' +
            '</a> </div></div>' +
            ' <p id="modelTech" ></p>' +
            '<p id="modelDesc" ></p>' +
           '<a id="modelLink" target="_blank">Link to Project </a>';
          document.getElementById('modal-body-gen').innerHTML = inStr;
          //console.log(inStr);


          document.getElementById('myModalLabel').innerHTML = model.title;

          document.getElementById('modelDesc').innerHTML = '<span class="font-bold"> Description : </span>' +model.desc;
          var link = document.getElementById('modelLink');
          link.href = model.link;
          var techStr = '<span class="font-bold"> Technology : </span>' + model.tech;
          if (model.tech.indexOf(',') > -1) {
            techStr = '<span class="font-bold"> Technologies : </span>' + model.tech;
          }
          document.getElementById('modelTech').innerHTML = techStr;


        }, function(response){
          console.log('not connected'+response.data);
        }

      );


    };

    $scope.classcall= function classcall(){

      if(document.getElementById('menu').className === 'menu'){

        document.getElementById('menu').className = 'menu nav--on';


      }else if(document.getElementById('menu').className === 'menu nav--on'){
        document.getElementById('menu').className = 'menu';
      }
    };

  });


