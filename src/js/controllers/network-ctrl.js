angular
    .module('RDash')
    .controller('NetworkCtrl', ['$scope', '$http', NetworkCtrl]);

function NetworkCtrl($scope, $http) {
    $http.get("http://localhost:8081/network/interfaces").then(
        function (response) {
            $scope.interfaces = response.data;
        }
    );
    $http.get("http://localhost:8081/network/routes").then(
        function (response) {
            routes_array = response.data.split("\n");
            var json = [];
            for (var i = 0; i < routes_array.length; i++) {
                json.push({"details": routes_array[i]});
            }

            $scope.routes = json;
        }
    );
}