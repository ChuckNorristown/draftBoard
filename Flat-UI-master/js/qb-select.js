function QBPlayerCtrl($scope) {
  $scope.availablePlayers = [];

  $.getJSON('json/player-pool.json', function(data) {
    $.each(data.players.player, function(i, p) {
        if (p.position == "QB") {
      $scope.availablePlayers.push({text:p.name + " - " + p.position + ", " + p.team, done:false});
      }
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
    $scope.availablePlayers = [Def];
    angular.forEach(oldPlayers, function(player) {
      if (!player.done) {
        $scope.availablePlayers.push(player);
      } else {
        $scope.draftedPlayers.push(player);
      }
    });
  };
}