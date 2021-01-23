"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _api = _interopRequireDefault(require("./routes/api.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _webPush = _interopRequireDefault(require("web-push"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
app.use(_express["default"].json()); // for parsing application/json

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'images')));
app.use('/api', _api["default"]);
app.use('/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiZXhwcmVzcyIsImpzb24iLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJBcGlSb3V0ZSIsIkF1dGhSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsR0FBRyxHQUFJLDBCQUFiO0FBQ0FBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBUUMsSUFBUixFQUFSLEUsQ0FBeUI7O0FBQ3pCSCxHQUFHLENBQUNDLEdBQUosQ0FBUSx1QkFBUjtBQUNBRCxHQUFHLENBQUNDLEdBQUosQ0FBUUcsdUJBQVdELElBQVgsRUFBUjtBQUNBSCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsb0JBQVFHLFVBQVIsQ0FBbUI7QUFBRUMsRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBbkIsQ0FBUixFLENBQWlEOztBQUNqRE4sR0FBRyxDQUFDQyxHQUFKLENBQVEsd0JBQU8sS0FBUCxDQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyw4QkFBZUssaUJBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixRQUFyQixDQUFmLENBQVI7QUFDQVQsR0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixFQUFlUyxlQUFmO0FBQ0FWLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLE9BQVIsRUFBZ0JVLGdCQUFoQjtlQUVlWCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBleHByZXNzLCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCAgQXBpUm91dGUgIGZyb20gJy4vcm91dGVzL2FwaS5yb3V0ZXMnO1xyXG5pbXBvcnQgQXV0aFJvdXRlIGZyb20gJy4vcm91dGVzL2F1dGgucm91dGVzJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCB3ZWJwdXNoIGZyb20gJ3dlYi1wdXNoJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xyXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTsgLy8gZm9yIHBhcnNpbmcgYXBwbGljYXRpb24vanNvblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpOyAvLyBmb3IgcGFyc2luZyBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnaW1hZ2VzJykpKTtcclxuYXBwLnVzZSgnL2FwaScsQXBpUm91dGUpO1xyXG5hcHAudXNlKCcvYXV0aCcsQXV0aFJvdXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDsiXX0=