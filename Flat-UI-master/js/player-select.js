function PlayerCtrl($scope) {
  $scope.availablePlayers = [];

  $.getJSON('player_pool.json', function(data) {
    $.each(data.players.player, function(i, p) {
      $scope.availablePlayers.push({text:p.name, done:false});
     });
   });

  $scope.draftedPlayers = [];
 
  $scope.addPlayer = function() {
    $scope.availablePlayers.push({text:$scope.playerText, done:false});
    $scope.playerText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.availablePlayers, function(player) {
      count += player.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.draft = function() {
    var oldPlayers = $scope.availablePlayers;
    $scope.availablePlayers = [];
    angular.forEach(oldPlayers, function(player) {
      if (!player.done) {
        $scope.availablePlayers.push(player);
      } else {
        $scope.draftedPlayers.push(player);
      }
    });
  };
}