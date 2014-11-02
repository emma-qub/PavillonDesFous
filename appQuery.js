'use strict'

var app = angular.module('queryModule', []);

app.controller('QueryController', function ($scope, $http) {

  $scope.indexArticle = 1;

  this.getArticles = function (indexArticle) {
    $http.get('http://localhost:8000/getArticles.php?index='+indexArticle.toString())
    .then( function (response) {
      $scope.articleTitle = response.data[0].Title;
      $scope.articleText = response.data[0].Text;
    });
  };

  this.nextArticle = function () {
    $scope.indexArticle += 1;
    this.getArticles($scope.indexArticle);
  };

  this.previousArticle = function () {
    $scope.indexArticle -= 1;
    this.getArticles($scope.indexArticle);
  };

});