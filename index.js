const app = angular.module("app", []);


app.controller('park', function($scope){
      $scope.tab = [];
      $scope.fetch = function(){

          //create the queryUrl to be used in the service call
          var query = "http://dataprovence.cloudapp.net:8080/v1/dataprovencetourisme/ParcsEtJardins?&format=json&callback=?";
          var filter = "";
          var queryUrl = query + filter;
          //make jquery call to service

          $.getJSON(queryUrl, function(data){
            for (let i = 0; i<data.d.length;i++){
            $scope.tab.push(data.d[i]);


            }

            return $scope.tab;
          })

          $scope.load = $scope.fetch();


      }



});
