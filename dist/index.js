"use strict";

var _express = _interopRequireDefault(require("express"));

var _hello = require("./hello.world");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT | 3000;
app.get('/', function (req, res, next) {
  res.send((0, _hello.hello)());
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});