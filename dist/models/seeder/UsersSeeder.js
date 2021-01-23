"use strict";

var _Equipment = _interopRequireDefault(require("../migrations/Equipment"));

var _database = _interopRequireDefault(require("../../config/database"));

var _AlarmaController = _interopRequireDefault(require("../../controllers/AlarmaController"));

var _AppMqtt = _interopRequireDefault(require("../../AppMqtt"));

var _base64url = _interopRequireDefault(require("base64url"));

var _ip = _interopRequireDefault(require("ip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_AppMqtt["default"].on('connect', function () {
  console.log('coneccion  mqtt');
});

_AppMqtt["default"].subscribe('Panel/#');

var Array = [];
var index = 0;

_AppMqtt["default"].on('message', function (topic, message) {
  console.log(topic);
  var id_MCU = topic.substr(6, 16);
  var opcode = topic.substring(23, topic.length);
  console.log(opcode);
  var data = JSON.parse(message);

  if (opcode == 'STATUS') {
    var ipx = _ip["default"].toString(_base64url["default"].toBuffer(data.ip));

    _Equipment["default"].exists({
      id_MCU: id_MCU
    }).then(function (result) {
      if (!result) {
        var req = {
          ip: ipx,
          id_MCU: id_MCU,
          index: index
        };

        _AlarmaController["default"].InternalStore(req);

        index++;
      }
    })["catch"](function (e) {
      return console.log(e);
    });
  }
});
/* const user = new Users({
    name: 'antiny Sotexlo',
    address: 'Urb EL pssixnal',
    cellphone: '9365388x',
    idControl: '47438558x',
    idEquipment: 'Assws44cx7ws',
    email: 'yelson@gmail.cxom'
});
user.save().then(result => {console.log('save');process.exit();}).catch(e => {console.log(e);process.exit();}); */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvc2VlZGVyL1VzZXJzU2VlZGVyLmpzIl0sIm5hbWVzIjpbImFwcE1xdHQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzdWJzY3JpYmUiLCJBcnJheSIsImluZGV4IiwidG9waWMiLCJtZXNzYWdlIiwiaWRfTUNVIiwic3Vic3RyIiwib3Bjb2RlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImlweCIsImlwIiwidG9TdHJpbmciLCJiYXNlNjR1cmwiLCJ0b0J1ZmZlciIsIkVxdWlwbWVudCIsImV4aXN0cyIsInRoZW4iLCJyZXN1bHQiLCJyZXEiLCJBbGFybWFDb250cm9sbGVyIiwiSW50ZXJuYWxTdG9yZSIsImUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsb0JBQVFDLEVBQVIsQ0FBVyxTQUFYLEVBQXFCLFlBQVU7QUFDM0JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsQ0FGRDs7QUFHQUgsb0JBQVFJLFNBQVIsQ0FBa0IsU0FBbEI7O0FBQ0EsSUFBSUMsS0FBSyxHQUFFLEVBQVg7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQU4sb0JBQVFDLEVBQVIsQ0FBVyxTQUFYLEVBQXFCLFVBQUNNLEtBQUQsRUFBT0MsT0FBUCxFQUFtQjtBQUNwQ04sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhLENBQWIsRUFBZSxFQUFmLENBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ssU0FBTixDQUFnQixFQUFoQixFQUFvQkwsS0FBSyxDQUFDTSxNQUExQixDQUFmO0FBQ0FYLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxNQUFaO0FBQ0EsTUFBSUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsT0FBWCxDQUFYOztBQUNBLE1BQUdHLE1BQU0sSUFBRSxRQUFYLEVBQW9CO0FBQ2hCLFFBQU1NLEdBQUcsR0FBR0MsZUFBR0MsUUFBSCxDQUFZQyxzQkFBVUMsUUFBVixDQUFtQlAsSUFBSSxDQUFDSSxFQUF4QixDQUFaLENBQVo7O0FBQ0FJLDBCQUFVQyxNQUFWLENBQWlCO0FBQUNkLE1BQUFBLE1BQU0sRUFBTkE7QUFBRCxLQUFqQixFQUEyQmUsSUFBM0IsQ0FBZ0MsVUFBQUMsTUFBTSxFQUFJO0FBQ3RDLFVBQUcsQ0FBQ0EsTUFBSixFQUFXO0FBQ1QsWUFBTUMsR0FBRyxHQUFHO0FBQ1JSLFVBQUFBLEVBQUUsRUFBRUQsR0FESTtBQUVSUixVQUFBQSxNQUFNLEVBQUVBLE1BRkE7QUFHUkgsVUFBQUEsS0FBSyxFQUFFQTtBQUhDLFNBQVo7O0FBS0FxQixxQ0FBaUJDLGFBQWpCLENBQStCRixHQUEvQjs7QUFDQXBCLFFBQUFBLEtBQUs7QUFDTjtBQUNKLEtBVkQsV0FVUyxVQUFBdUIsQ0FBQztBQUFBLGFBQUkzQixPQUFPLENBQUNDLEdBQVIsQ0FBWTBCLENBQVosQ0FBSjtBQUFBLEtBVlY7QUFXSDtBQUNKLENBcEJEO0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVxdWlwbWVudCBmcm9tICcuLi9taWdyYXRpb25zL0VxdWlwbWVudCdcclxuaW1wb3J0IGRhdGFiYXNlIGZyb20gJy4uLy4uL2NvbmZpZy9kYXRhYmFzZSdcclxuaW1wb3J0IEFsYXJtYUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvQWxhcm1hQ29udHJvbGxlcidcclxuaW1wb3J0IGFwcE1xdHQgZnJvbSAnLi4vLi4vQXBwTXF0dCdcclxuaW1wb3J0IGJhc2U2NHVybCBmcm9tICdiYXNlNjR1cmwnO1xyXG5pbXBvcnQgaXAgZnJvbSAnaXAnO1xyXG5cclxuYXBwTXF0dC5vbignY29ubmVjdCcsZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdjb25lY2Npb24gIG1xdHQnKTtcclxufSlcclxuYXBwTXF0dC5zdWJzY3JpYmUoJ1BhbmVsLyMnKTtcclxubGV0IEFycmF5PSBbXTtcclxubGV0IGluZGV4ID0gMDtcclxuYXBwTXF0dC5vbignbWVzc2FnZScsKHRvcGljLG1lc3NhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRvcGljKVxyXG4gICAgY29uc3QgaWRfTUNVID0gdG9waWMuc3Vic3RyKDYsMTYpO1xyXG4gICAgY29uc3Qgb3Bjb2RlID0gdG9waWMuc3Vic3RyaW5nKDIzLCB0b3BpYy5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2cob3Bjb2RlKVxyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgaWYob3Bjb2RlPT0nU1RBVFVTJyl7XHJcbiAgICAgICAgY29uc3QgaXB4ID0gaXAudG9TdHJpbmcoYmFzZTY0dXJsLnRvQnVmZmVyKGRhdGEuaXApKTtcclxuICAgICAgICBFcXVpcG1lbnQuZXhpc3RzKHtpZF9NQ1V9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHQpe1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcSA9IHtcclxuICAgICAgICAgICAgICAgICAgaXA6IGlweCxcclxuICAgICAgICAgICAgICAgICAgaWRfTUNVOiBpZF9NQ1UsXHJcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQWxhcm1hQ29udHJvbGxlci5JbnRlcm5hbFN0b3JlKHJlcSk7XHJcbiAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG59IFxyXG4pXHJcbi8qIGNvbnN0IHVzZXIgPSBuZXcgVXNlcnMoe1xyXG4gICAgbmFtZTogJ2FudGlueSBTb3RleGxvJyxcclxuICAgIGFkZHJlc3M6ICdVcmIgRUwgcHNzaXhuYWwnLFxyXG4gICAgY2VsbHBob25lOiAnOTM2NTM4OHgnLFxyXG4gICAgaWRDb250cm9sOiAnNDc0Mzg1NTh4JyxcclxuICAgIGlkRXF1aXBtZW50OiAnQXNzd3M0NGN4N3dzJyxcclxuICAgIGVtYWlsOiAneWVsc29uQGdtYWlsLmN4b20nXHJcbn0pO1xyXG51c2VyLnNhdmUoKS50aGVuKHJlc3VsdCA9PiB7Y29uc29sZS5sb2coJ3NhdmUnKTtwcm9jZXNzLmV4aXQoKTt9KS5jYXRjaChlID0+IHtjb25zb2xlLmxvZyhlKTtwcm9jZXNzLmV4aXQoKTt9KTsgKi9cclxuXHJcbiJdfQ==