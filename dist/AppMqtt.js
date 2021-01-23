"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mqtt = _interopRequireDefault(require("mqtt"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//var KEY = fs.readFileSync(path.join(__dirname, '/tls-key.pem'))
//var CERT = fs.readFileSync(path.join(__dirname, '/tls-cert.pem'))
var TRUSTED_CA_LIST = _fs["default"].readFileSync(_path["default"].join(__dirname, '/ca.crt'));

var PORT = 1883;
var HOST = "192.168.0.2";
var options = {
  host: HOST,
  port: PORT,
  //key: KEY,
  //cert: CERT,
  rejectUnauthorized: true,
  // The CA list will be used to determine if server is authorized
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtt'
};

var client = _mqtt["default"].connect(options);

var _default = client;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBNcXR0LmpzIl0sIm5hbWVzIjpbIlRSVVNURURfQ0FfTElTVCIsImZzIiwicmVhZEZpbGVTeW5jIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJQT1JUIiwiSE9TVCIsIm9wdGlvbnMiLCJob3N0IiwicG9ydCIsInJlamVjdFVuYXV0aG9yaXplZCIsImNhIiwicHJvdG9jb2wiLCJjbGllbnQiLCJtcXR0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBR0MsZUFBR0MsWUFBSCxDQUFnQkMsaUJBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixTQUFyQixDQUFoQixDQUF4Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBLElBQU1DLElBQUksR0FBRyxhQUFiO0FBRUEsSUFBTUMsT0FBTyxHQUFHO0FBQ2RDLEVBQUFBLElBQUksRUFBRUYsSUFEUTtBQUVkRyxFQUFBQSxJQUFJLEVBQUVKLElBRlE7QUFHZDtBQUNBO0FBQ0FLLEVBQUFBLGtCQUFrQixFQUFFLElBTE47QUFNZDtBQUNBQyxFQUFBQSxFQUFFLEVBQUVaLGVBUFU7QUFRZGEsRUFBQUEsUUFBUSxFQUFFO0FBUkksQ0FBaEI7O0FBVUEsSUFBTUMsTUFBTSxHQUFHQyxpQkFBS0MsT0FBTCxDQUFhUixPQUFiLENBQWY7O2VBQ2VNLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIG1xdHQgZnJvbSAnbXF0dCc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vL3ZhciBLRVkgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy90bHMta2V5LnBlbScpKVxyXG4vL3ZhciBDRVJUID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcvdGxzLWNlcnQucGVtJykpXHJcbmNvbnN0IFRSVVNURURfQ0FfTElTVCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL2NhLmNydCcpKVxyXG5cclxuY29uc3QgUE9SVCA9IDE4ODNcclxuY29uc3QgSE9TVCA9IFwiMTkyLjE2OC4wLjJcIlxyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBob3N0OiBIT1NULFxyXG4gIHBvcnQ6IFBPUlQsXHJcbiAgLy9rZXk6IEtFWSxcclxuICAvL2NlcnQ6IENFUlQsXHJcbiAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlLFxyXG4gIC8vIFRoZSBDQSBsaXN0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgaWYgc2VydmVyIGlzIGF1dGhvcml6ZWRcclxuICBjYTogVFJVU1RFRF9DQV9MSVNULFxyXG4gIHByb3RvY29sOiAnbXF0dCdcclxufVxyXG5jb25zdCBjbGllbnQgPSBtcXR0LmNvbm5lY3Qob3B0aW9ucyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudCJdfQ==