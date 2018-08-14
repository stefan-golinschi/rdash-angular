angular
    .module('RDash')
    .controller('StatsCtrl', ['$scope', '$http', StatsCtrl]);

function StatsCtrl($scope, $http) {
    /* storage */
    $scope.storage = {
        used: "",
        size: "",
        available: ""
    };
    $http.get("http://localhost:8081/storage/size").then(
        function (response) {
            $scope.storage.size = response.data.replace(' ', '');
        }
    );
    $http.get("http://localhost:8081/storage/used").then(
        function (response) {
            $scope.storage.used = response.data;
        }
    );
    $http.get("http://localhost:8081/storage/available").then(
        function (response) {
            $scope.storage.available = response.data;
        }
    );

    /* memory */
    $scope.memory = {
        total: "",
        used: "",
        free: "",
        shared: "",
        available: ""
    };
    $http.get("http://localhost:8081/memory/total").then(
        function (response) {
            $scope.memory.total = response.data;
        }
    );
    $http.get("http://localhost:8081/memory/used").then(
        function (response) {
            $scope.memory.used = response.data;
        }
    );

    /* cpu */
    $scope.cpu = {
        temp0: ""
    };
    $http.get("http://localhost:8081/cpu/temp0").then(
        function (response) {
            $scope.cpu.temp0 = response.data.replace('+', '');
        }
    );

    /* network */
    var wtfismyip = {
        ip: "",
        location: "",
        hostname: "",
        isp: "",
        torexit: "",
        countrycode: ""
    };
    $scope.network = {
        wtf: wtfismyip
    };

    $http.get("http://localhost:8081/network/wtfismyip").then(
        function (response) {
            try {
                var obj = JSON.parse(response.data);
                $scope.network.wtf.ip = obj.YourFuckingIPAddress;
                $scope.network.wtf.location = obj.YourFuckingLocation;
                $scope.network.wtf.hostname = obj.YourFuckingHostname;
                $scope.network.wtf.isp = obj.YourFuckingISP;
                $scope.network.wtf.torexit = obj.YourFuckingTorExit;
                $scope.network.wtf.countrycode = obj.YourFuckingCountryCode;
            } catch (e) {
                console.log ("wtfismyip.com is down. Maybe check your internet connection?");
                return false;
            }

        }
    );

    /* services */
    $scope.services = {
        ssh: "",
        openvpn: "",
        firewall: "",
        ftp: ""
    };
    $http.get("http://localhost:8081/services/ssh").then(
        function (response) {
            if (response.data !== "")
                $scope.services.ssh = response.data;
            else
                $scope.services.ssh = "Not installed"
        }
    );
    $http.get("http://localhost:8081/services/openvpn").then(
        function (response) {
            if (response.data !== "")
                $scope.services.openvpn = response.data;
            else
                $scope.services.openvpn = "Not installed"
        }
    );
    $http.get("http://localhost:8081/services/firewall").then(
        function (response) {
            if (response.data !== "")
                $scope.services.firewall = response.data;
            else
                $scope.services.firewall = "Not installed"
        }
    );
    $http.get("http://localhost:8081/services/ftp").then(
        function (response) {
            if (response.data !== "")
                $scope.services.ftp = response.data;
            else
                $scope.services.ftp = "Not installed"
        }
    );

    /* os */
    $scope.os = {
        kernel_version: "",
        kernel_cmdline: "",
        hostname: "",
        distro: ""
    };
    $http.get("http://localhost:8081/os/kernel_version").then(
        function (response) {
            $scope.os.kernel_version = response.data;
        }
    );
    $http.get("http://localhost:8081/os/kernel_cmdline").then(
        function (response) {
            $scope.os.kernel_cmdline = response.data;
        }
    );
    $http.get("http://localhost:8081/os/hostname").then(
        function (response) {
            $scope.os.hostname = response.data;
        }
    );




}
