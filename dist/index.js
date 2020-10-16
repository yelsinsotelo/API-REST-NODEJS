"use strict";

var _App = _interopRequireDefault(require("./App"));

require("./config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_App["default"].listen(4200);

console.log("Server lisen port ", 4200);