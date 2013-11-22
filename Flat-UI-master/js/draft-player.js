
  $scope.draftPlayer = function() {
    $scope.drafted.push({text:$scope.draftedText, done:false});
    $scope.draftedText = '';
    });
  };
}