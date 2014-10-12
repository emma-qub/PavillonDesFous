'use strict'

var app = angular.module('queryModule', []);

app.controller('QueryController', function ($scope, $http) {

  this.getArticles = function () {
    $http.get('http://localhost:8000/getArticles.php')
    .then(function(response) {
      $scope.articles = response;
    });
  };

});