'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.projects
 * @description
 * # projects
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
  .factory('projects', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
