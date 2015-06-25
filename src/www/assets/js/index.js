/*global angular window*/
(function withAngular(angular) {

'use strict';

angular.module('website', [
  'ngRoute',
  '720kb.fx'
])
.config(['$locationProvider', function ($locationProvider) {

  $locationProvider.html5Mode({
    'enabled': true,
    'requireBase': false
  });
}])
.controller('Ctrl', ['$scope', '$location',
  function Ctrl($scope, $location) {

  var hash;

  $scope.activeLink = 'hello';

  $scope.setActiveLink = function setActiveLink(link) {
    $scope.activeLink = link;
  };
}]);
}(angular));
