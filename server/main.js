var express = require('express');
var app = express();
var fs = require("fs");
var bash = require ('shelljs');
var cors = require ('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* disk storage */
app.get('/storage/size', function (req, res) {
    data = bash.exec('./scripts/storage/size.sh /');
    res.send(data);
});

app.get('/storage/available', function (req, res) {
    data = bash.exec('./scripts/storage/available.sh /');
    res.send(data);
});

app.get('/storage/used', function (req, res) {
    data = bash.exec('./scripts/storage/used.sh /');
    res.send(data);
});

/* memory */
app.get('/memory/available', function (req, res) {
    data = bash.exec('./scripts/memory/available.sh');
    res.send(data);
});
app.get('/memory/free', function (req, res) {
    data = bash.exec('./scripts/memory/free.sh');
    res.send(data);
});
app.get('/memory/shared', function (req, res) {
    data = bash.exec('./scripts/memory/shared.sh');
    res.send(data);
});
app.get('/memory/total', function (req, res) {
    data = bash.exec('./scripts/memory/total.sh');
    res.send(data);
});
app.get('/memory/used', function (req, res) {
    data = bash.exec('./scripts/memory/used.sh');
    res.send(data);
});

/* cpu */
app.get('/cpu/temp0', function (req, res) {
    data = bash.exec('./scripts/cpu/temp0.sh');
    res.send(data);
});

/* network */
app.get('/network/wtfismyip', function (req, res) {
    data = bash.exec('./scripts/network/wtfismyip.sh');
    res.send(data);
    //res.send(JSON.parse(data));
});
app.get('/network/interfaces', function (req, res) {
    data = bash.exec('./scripts/network/interfaces.sh');
    res.send(JSON.parse(data));
});

app.get('/network/routes', function (req, res) {
    data = bash.exec('./scripts/network/routes.sh');
    res.send(data);
});

/* usb */
app.get('/usb/ls', function (req, res) {
    data = bash.exec('./scripts/usb/lsusb.sh');
    //res.send(data);
    res.send(JSON.parse(data));
});

/* services */
app.get('/services/ssh', function (req, res) {
    data = bash.exec('./scripts/services/ssh.sh');
    res.send(data);
});
app.get('/services/openvpn', function (req, res) {
    data = bash.exec('./scripts/services/openvpn.sh');
    res.send(data);
});
app.get('/services/firewall', function (req, res) {
    data = bash.exec('./scripts/services/firewall.sh');
    res.send(data);
});
app.get('/services/ftp', function (req, res) {
    data = bash.exec('./scripts/services/ftp.sh');
    res.send(data);
});

/* os */
app.get('/os/kernel_version', function (req, res) {
    data = bash.exec('./scripts/os/uname.sh');
    res.send(data);
});
app.get('/os/kernel_cmdline', function (req, res) {
    data = bash.exec('./scripts/os/cmdline.sh');
    res.send(data);
});
app.get('/os/hostname', function (req, res) {
    data = bash.exec('./scripts/os/hostname.sh');
    res.send(data);
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)

});
