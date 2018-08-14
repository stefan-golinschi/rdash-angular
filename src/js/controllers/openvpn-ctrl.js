angular
    .module('RDash')
    .controller('OpenvpnCtrl', ['$scope', '$http', OpenvpnCtrl]);

function OpenvpnCtrl($scope, $http) {
    $http.get("http://localhost:8081/usb/ls").then(
        function (response) {
            try {
                $scope.usb_list = response.data;
            } catch (e) {
                console.log ("cannot parse json: " + e);
                return false;
            }
        }
    );

}