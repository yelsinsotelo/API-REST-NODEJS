"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect('mongodb://127.0.0.1:27017/securitydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Base de Datos Conectada");
})["catch"](function (error) {
  return console.log(error);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGF0YWJhc2UuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImRiIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0FBLHFCQUFTQyxPQUFULENBQWlCLHNDQUFqQixFQUF5RDtBQUFDQyxFQUFBQSxlQUFlLEVBQUUsSUFBbEI7QUFBd0JDLEVBQUFBLGtCQUFrQixFQUFFO0FBQTVDLENBQXpELEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxFQUFFO0FBQUEsU0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosQ0FBSjtBQUFBLENBRFIsV0FFTyxVQUFBQyxLQUFLO0FBQUEsU0FBSUYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBSjtBQUFBLENBRloiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvc2VjdXJpdHlkYicsIHt1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZX0pXHJcbi50aGVuKGRiID0+IGNvbnNvbGUubG9nKFwiQmFzZSBkZSBEYXRvcyBDb25lY3RhZGFcIikpXHJcbi5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG5cclxuIl19