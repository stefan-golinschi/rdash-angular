angular
    .module('RDash')
    .controller('UsbCtrl', ['$scope', '$http', UsbCtrl]);

function UsbCtrl($scope, $http) {
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