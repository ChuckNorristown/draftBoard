var qb = angular.module('qb', []);
 
qb.controller('QBlist', function QBlistCtrl($scope) {
  $scope.qbs = [
    {'name': 'QB1'},
    {'name': 'QB2'},
    {'name': 'QB3'}
    {'name': 'QB4'}
  ];
});