dragNdrop.controller('dragCtrl', function($scope, $timeout) {
  $scope.availablePlayers = [];
}

$scope.availablePlayers = [
  {{text:p.name + " - " + p.position + ", " + p.team, done:false, drag:true, drop:true}];


