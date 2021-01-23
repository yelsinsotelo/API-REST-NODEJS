"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Users = _interopRequireDefault(require("../models/migrations/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }

  _createClass(AuthController, null, [{
    key: "validateSingUp",
    value: function validateSingUp(req, res, next) {
      var _req$body = req.body,
          email = _req$body.email,
          cellphone = _req$body.cellphone;

      _Users["default"].find({
        email: email,
        cellphone: cellphone
      }).exec().then(function (result) {
        if (result.length > 0) {
          res.status(200).json({
            success: true,
            data: {
              auth: true,
              message: 'Tiene Permiso para usa el App'
            }
          });
        } else {
          res.status(200).json({
            success: true,
            data: {
              auth: false,
              message: 'No Tiene Permiso para usa el App'
            }
          });
        }
      })["catch"](function (error) {
        res.status(200).json({
          success: false,
          data: {
            auth: false,
            message: 'No tiene Permisio para usar el App'
          }
        });
      });
    }
  }, {
    key: "SingIn",
    value: function SingIn() {}
  }]);

  return AuthController;
}();

var _default = AuthController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9BdXRoQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udHJvbGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJib2R5IiwiZW1haWwiLCJjZWxscGhvbmUiLCJVc2VycyIsImZpbmQiLCJleGVjIiwidGhlbiIsInJlc3VsdCIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImF1dGgiLCJtZXNzYWdlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7O21DQUNvQkMsRyxFQUFLQyxHLEVBQUtDLEksRUFBTTtBQUFBLHNCQUNMRixHQUFHLENBQUNHLElBREM7QUFBQSxVQUMxQkMsS0FEMEIsYUFDMUJBLEtBRDBCO0FBQUEsVUFDbkJDLFNBRG1CLGFBQ25CQSxTQURtQjs7QUFFbENDLHdCQUFNQyxJQUFOLENBQVc7QUFBRUgsUUFBQUEsS0FBSyxFQUFFQSxLQUFUO0FBQWdCQyxRQUFBQSxTQUFTLEVBQUVBO0FBQTNCLE9BQVgsRUFBbURHLElBQW5ELEdBQ0tDLElBREwsQ0FDVSxVQUFBQyxNQUFNLEVBQUk7QUFDWixZQUFJQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJWLFVBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxZQUFBQSxPQUFPLEVBQUUsSUFEUTtBQUVqQkMsWUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLGNBQUFBLElBQUksRUFBRSxJQURKO0FBRUZDLGNBQUFBLE9BQU8sRUFBRTtBQUZQO0FBRlcsV0FBckI7QUFPSCxTQVJELE1BUU87QUFDSGhCLFVBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxZQUFBQSxPQUFPLEVBQUUsSUFEUTtBQUVqQkMsWUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLGNBQUFBLElBQUksRUFBRSxLQURKO0FBRUZDLGNBQUFBLE9BQU8sRUFBRTtBQUZQO0FBRlcsV0FBckI7QUFPSDtBQUVKLE9BcEJMLFdBcUJXLFVBQUFDLEtBQUssRUFBSTtBQUNaakIsUUFBQUEsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLFVBQUFBLE9BQU8sRUFBRSxLQURRO0FBRWpCQyxVQUFBQSxJQUFJLEVBQUU7QUFDRkMsWUFBQUEsSUFBSSxFQUFFLEtBREo7QUFFRkMsWUFBQUEsT0FBTyxFQUFFO0FBRlA7QUFGVyxTQUFyQjtBQU9ILE9BN0JMO0FBOEJIOzs7NkJBRWUsQ0FFZjs7Ozs7O2VBR1VsQixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy9taWdyYXRpb25zL1VzZXJzJztcclxuXHJcbmNsYXNzIEF1dGhDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB2YWxpZGF0ZVNpbmdVcChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIGNlbGxwaG9uZSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgVXNlcnMuZmluZCh7IGVtYWlsOiBlbWFpbCwgY2VsbHBob25lOiBjZWxscGhvbmUgfSkuZXhlYygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGllbmUgUGVybWlzbyBwYXJhIHVzYSBlbCBBcHAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIFRpZW5lIFBlcm1pc28gcGFyYSB1c2EgZWwgQXBwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vIHRpZW5lIFBlcm1pc2lvIHBhcmEgdXNhciBlbCBBcHAnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgU2luZ0luKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRyb2xsZXI7Il19