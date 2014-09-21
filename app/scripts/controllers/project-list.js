'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ProjectListCtrl
 * @description
 * # ProjectListCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ProjectListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
