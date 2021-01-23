"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AppMqtt = _interopRequireDefault(require("../AppMqtt"));

var _Users = _interopRequireDefault(require("../models/migrations/Users"));

var _Equipment = _interopRequireDefault(require("../models/migrations/Equipment"));

var _Emergency = _interopRequireDefault(require("../models/migrations/Emergency"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FunctioController = /*#__PURE__*/function () {
  function FunctioController() {
    _classCallCheck(this, FunctioController);
  }

  _createClass(FunctioController, null, [{
    key: "tone",
    value: function tone(req, res, next) {
      var data = req.body;
      var num = req.params.num;

      _Users["default"].findOne({
        cellphone: data.cellphone
      }).exec().then(function (result) {
        console.log(result.idEquipment);

        _AppMqtt["default"].publish("Panel/".concat(result.idEquipment, "/AUDIO"), "{\"fn\":\"tono".concat(num, ".wav\"}"));

        _AppMqtt["default"].publish("Panel/".concat(result.idEquipment, "/PGM3"), '0');

        _AppMqtt["default"].publish("Panel/".concat(result.idEquipment, "/PGM2"), '0');

        _AppMqtt["default"].publish("Panel/".concat(result.idEquipment, "/PGM1"), '1');

        res.status(200).json({
          success: true,
          message: 'Se Activó la alarma correctamente'
        });
      })["catch"](function (error) {
        res.status(200).json({
          success: false,
          message: 'El usuario no está asociado a una alarma',
          code: error
        });
      });
    }
  }, {
    key: "silence",
    value: function silence(req, res, next) {}
  }, {
    key: "alarm",
    value: function alarm(req, res, next) {
      var data = req.body;
      var responsex;

      _Users["default"].findOne({
        cellphone: data.cellphone
      }).exec().then(function (result) {
        _Equipment["default"].findOne({
          id_MCU: result.idEquipment
        }).exec().then(function (result) {
          responsex = {
            success: true,
            emergency: true,
            lat: result.latCenter,
            lng: result.lngCenter
          };

          _index["default"].emit("FromAPI", responsex);

          console.log(result);

          _AppMqtt["default"].publish("Panel/".concat(result.id_MCU, "/AUDIO"), '{"fn":"tono2.wav"}');

          _AppMqtt["default"].publish("Panel/".concat(result.id_MCU, "/PGM3"), '0');

          _AppMqtt["default"].publish("Panel/".concat(result.id_MCU, "/PGM2"), '0');

          _AppMqtt["default"].publish("Panel/".concat(result.id_MCU, "/PGM1"), '1');

          var emergency = new _Emergency["default"]({
            lat: result.latCenter != null ? result.latCenter.toString() : 'null',
            lng: result.lngCenter != null ? result.lngCenter.toString() : 'null',
            from: 'Movil',
            state: 'Pendiente'
          });
          emergency.save().then(function (result) {
            res.status(200).json({
              success: true,
              message: 'Se envio la alerta correctamente',
              code: result
            });
          })["catch"](function (error) {
            res.status(500).json({
              success: false,
              message: 'no se puede guardar emergencia',
              code: error
            });
          });
        })["catch"](function (error) {
          res.status(500).json({
            success: false,
            message: 'El usuario no está asociado a una alarma',
            code: error
          });
        });
      })["catch"](function (error) {
        res.status(500).json({
          success: false,
          message: 'El usuario no está asociado a una alarma',
          code: error
        });
      });
    }
  }]);

  return FunctioController;
}();

var _default = FunctioController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9GdW5jdGlvbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiRnVuY3Rpb0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZGF0YSIsImJvZHkiLCJudW0iLCJwYXJhbXMiLCJVc2VycyIsImZpbmRPbmUiLCJjZWxscGhvbmUiLCJleGVjIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJpZEVxdWlwbWVudCIsImFwcG1xdHQiLCJwdWJsaXNoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb2RlIiwicmVzcG9uc2V4IiwiRXF1aXBtZW50IiwiaWRfTUNVIiwiZW1lcmdlbmN5IiwibGF0IiwibGF0Q2VudGVyIiwibG5nIiwibG5nQ2VudGVyIiwiaW8iLCJlbWl0IiwiRW1lcmdlbmN5IiwidG9TdHJpbmciLCJmcm9tIiwic3RhdGUiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFDTUEsaUI7Ozs7Ozs7eUJBQ1VDLEcsRUFBS0MsRyxFQUFLQyxJLEVBQU07QUFDeEIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHTCxHQUFHLENBQUNNLE1BQUosQ0FBV0QsR0FBdkI7O0FBQ0FFLHdCQUFNQyxPQUFOLENBQWM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFTixJQUFJLENBQUNNO0FBQWxCLE9BQWQsRUFBNkNDLElBQTdDLEdBQ0tDLElBREwsQ0FDVSxVQUFBQyxNQUFNLEVBQUk7QUFDWkMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csV0FBbkI7O0FBQ0FDLDRCQUFRQyxPQUFSLGlCQUF5QkwsTUFBTSxDQUFDRyxXQUFoQyxxQ0FBbUVWLEdBQW5FOztBQUNBVyw0QkFBUUMsT0FBUixpQkFBeUJMLE1BQU0sQ0FBQ0csV0FBaEMs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SSxFQUFFWDtBQUhXLGFBQXJCO0FBS0gsV0FORCxXQU9RLFVBQUFVLEtBQUssRUFBSTtBQUNickIsWUFBQUEsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxjQUFBQSxPQUFPLEVBQUUsS0FEUTtBQUVqQkMsY0FBQUEsT0FBTyxFQUFFLGdDQUZRO0FBR2pCRSxjQUFBQSxJQUFJLEVBQUVEO0FBSFcsYUFBckI7QUFLSCxXQWJEO0FBZ0JILFNBcENMLFdBcUNRLFVBQUFBLEtBQUssRUFBSTtBQUNickIsVUFBQUEsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxZQUFBQSxPQUFPLEVBQUUsS0FEUTtBQUVqQkMsWUFBQUEsT0FBTyxFQUFFLDBDQUZRO0FBR2pCRSxZQUFBQSxJQUFJLEVBQUVEO0FBSFcsV0FBckI7QUFLSCxTQTNDRDtBQTZDSCxPQS9DTCxXQWdEVyxVQUFBQSxLQUFLLEVBQUk7QUFDWnJCLFFBQUFBLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsVUFBQUEsT0FBTyxFQUFFLEtBRFE7QUFFakJDLFVBQUFBLE9BQU8sRUFBRSwwQ0FGUTtBQUdqQkUsVUFBQUEsSUFBSSxFQUFFRDtBQUhXLFNBQXJCO0FBS0gsT0F0REw7QUF1REg7Ozs7OztlQUdVdkIsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwbXF0dCBmcm9tICcuLi9BcHBNcXR0JztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy9taWdyYXRpb25zL1VzZXJzJztcclxuaW1wb3J0IEVxdWlwbWVudCBmcm9tICcuLi9tb2RlbHMvbWlncmF0aW9ucy9FcXVpcG1lbnQnXHJcbmltcG9ydCBFbWVyZ2VuY3kgZnJvbSAnLi4vbW9kZWxzL21pZ3JhdGlvbnMvRW1lcmdlbmN5J1xyXG5pbXBvcnQgaW8gZnJvbSAnLi4vaW5kZXgnXHJcbmNsYXNzIEZ1bmN0aW9Db250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0b25lKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IG51bSA9IHJlcS5wYXJhbXMubnVtO1xyXG4gICAgICAgIFVzZXJzLmZpbmRPbmUoeyBjZWxscGhvbmU6IGRhdGEuY2VsbHBob25lIH0pLmV4ZWMoKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmlkRXF1aXBtZW50KVxyXG4gICAgICAgICAgICAgICAgYXBwbXF0dC5wdWJsaXNoKGBQYW5lbC8ke3Jlc3VsdC5pZEVxdWlwbWVudH0vQVVESU9gLCBge1wiZm5cIjpcInRvbm8ke251bX0ud2F2XCJ9YCk7XHJcbiAgICAgICAgICAgICAgICBhcHBtcXR0LnB1Ymxpc2goYFBhbmVsLyR7cmVzdWx0LmlkRXF1aXBtZW50fS9QR00zYCwgJzAnKTtcclxuICAgICAgICAgICAgICAgIGFwcG1xdHQucHVibGlzaChgUGFuZWwvJHtyZXN1bHQuaWRFcXVpcG1lbnR9L1BHTTJgLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgYXBwbXF0dC5wdWJsaXNoKGBQYW5lbC8ke3Jlc3VsdC5pZEVxdWlwbWVudH0vUEdNMWAsICcxJyk7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgQWN0aXbDsyBsYSBhbGFybWEgY29ycmVjdGFtZW50ZScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbCB1c3VhcmlvIG5vIGVzdMOhIGFzb2NpYWRvIGEgdW5hIGFsYXJtYScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHNpbGVuY2UocmVxLCByZXMsIG5leHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFsYXJtKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGxldCByZXNwb25zZXg7XHJcbiAgICAgICAgVXNlcnMuZmluZE9uZSh7IGNlbGxwaG9uZTogZGF0YS5jZWxscGhvbmUgfSkuZXhlYygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBFcXVpcG1lbnQuZmluZE9uZSh7IGlkX01DVTogcmVzdWx0LmlkRXF1aXBtZW50IH0pLmV4ZWMoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNleCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWVyZ2VuY3k6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHJlc3VsdC5sYXRDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHJlc3VsdC5sbmdDZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW8uZW1pdChcIkZyb21BUElcIiwgcmVzcG9uc2V4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBtcXR0LnB1Ymxpc2goYFBhbmVsLyR7cmVzdWx0LmlkX01DVX0vQVVESU9gLCAne1wiZm5cIjpcInRvbm8yLndhdlwifScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBtcXR0LnB1Ymxpc2goYFBhbmVsLyR7cmVzdWx0LmlkX01DVX0vUEdNM2AsICcwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcG1xdHQucHVibGlzaChgUGFuZWwvJHtyZXN1bHQuaWRfTUNVfS9QR00yYCwgJzAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbXF0dC5wdWJsaXNoKGBQYW5lbC8ke3Jlc3VsdC5pZF9NQ1V9L1BHTTFgLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWVyZ2VuY3kgPSBuZXcgRW1lcmdlbmN5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcmVzdWx0LmxhdENlbnRlciAhPSBudWxsID8gcmVzdWx0LmxhdENlbnRlci50b1N0cmluZygpIDogJ251bGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiByZXN1bHQubG5nQ2VudGVyICE9IG51bGwgPyByZXN1bHQubG5nQ2VudGVyLnRvU3RyaW5nKCkgOiAnbnVsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnTW92aWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdQZW5kaWVudGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWVyZ2VuY3kuc2F2ZSgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBlbnZpbyBsYSBhbGVydGEgY29ycmVjdGFtZW50ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbm8gc2UgcHVlZGUgZ3VhcmRhciBlbWVyZ2VuY2lhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRWwgdXN1YXJpbyBubyBlc3TDoSBhc29jaWFkbyBhIHVuYSBhbGFybWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbCB1c3VhcmlvIG5vIGVzdMOhIGFzb2NpYWRvIGEgdW5hIGFsYXJtYScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvQ29udHJvbGxlcjsiXX0=