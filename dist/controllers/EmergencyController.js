"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Emergency = _interopRequireDefault(require("../models/migrations/Emergency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmergencyController = /*#__PURE__*/function () {
  function EmergencyController() {
    _classCallCheck(this, EmergencyController);
  }

  _createClass(EmergencyController, null, [{
    key: "Index",
    value: function Index(req, res) {
      _Emergency["default"].find().sort({
        '_id': -1
      }).exec().then(function (result) {
        res.status(200).json({
          success: true,
          data: {
            items: result,
            numItems: result.length
          }
        });
      })["catch"](function (error) {
        res.status(200).json({
          success: false,
          data: {
            message: error
          }
        });
      });
    }
  }, {
    key: "Store",
    value: function Store(req, res) {
      var emergency = new _Emergency["default"]({
        lat: req.body.lat,
        lng: req.body.lng,
        from: req.body.from
      });
      emergency.save().then(function (result) {
        res.status(200).json({
          success: true,
          data: {
            message: 'success',
            code: result
          }
        });
      })["catch"](function (error) {
        res.status(500).json({
          success: false,
          data: {
            message: 'error',
            code: error
          }
        });
      });
    }
  }, {
    key: "Edit",
    value: function Edit(req, res) {}
  }, {
    key: "Update",
    value: function Update(req, res) {}
  }, {
    key: "Destroy",
    value: function Destroy(req, res) {}
  }]);

  return EmergencyController;
}();

var _default = EmergencyController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9FbWVyZ2VuY3lDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkVtZXJnZW5jeUNvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJFbWVyZ2VuY3kiLCJmaW5kIiwic29ydCIsImV4ZWMiLCJ0aGVuIiwicmVzdWx0Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsImVycm9yIiwibWVzc2FnZSIsImVtZXJnZW5jeSIsImxhdCIsImJvZHkiLCJsbmciLCJmcm9tIiwic2F2ZSIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVNQSxtQjs7Ozs7OzswQkFDV0MsRyxFQUFLQyxHLEVBQUs7QUFDbkJDLDRCQUFVQyxJQUFWLEdBQWlCQyxJQUFqQixDQUFzQjtBQUFDLGVBQU8sQ0FBQztBQUFULE9BQXRCLEVBQW1DQyxJQUFuQyxHQUNLQyxJQURMLENBQ1UsVUFBQUMsTUFBTSxFQUFJO0FBQ1pOLFFBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxVQUFBQSxPQUFPLEVBQUUsSUFEUTtBQUVqQkMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFlBQUFBLEtBQUssRUFBRUwsTUFETDtBQUVGTSxZQUFBQSxRQUFRLEVBQUVOLE1BQU0sQ0FBQ087QUFGZjtBQUZXLFNBQXJCO0FBT0gsT0FUTCxXQVVXLFVBQUFDLEtBQUssRUFBSTtBQUNaZCxRQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsVUFBQUEsT0FBTyxFQUFFLEtBRFE7QUFFakJDLFVBQUFBLElBQUksRUFBRTtBQUNGSyxZQUFBQSxPQUFPLEVBQUVEO0FBRFA7QUFGVyxTQUFyQjtBQU1ILE9BakJMO0FBa0JIOzs7MEJBQ1lmLEcsRUFBS0MsRyxFQUFLO0FBQ25CLFVBQU1nQixTQUFTLEdBQUcsSUFBSWYscUJBQUosQ0FBYztBQUM1QmdCLFFBQUFBLEdBQUcsRUFBRWxCLEdBQUcsQ0FBQ21CLElBQUosQ0FBU0QsR0FEYztBQUU1QkUsUUFBQUEsR0FBRyxFQUFFcEIsR0FBRyxDQUFDbUIsSUFBSixDQUFTQyxHQUZjO0FBRzVCQyxRQUFBQSxJQUFJLEVBQUVyQixHQUFHLENBQUNtQixJQUFKLENBQVNFO0FBSGEsT0FBZCxDQUFsQjtBQU1BSixNQUFBQSxTQUFTLENBQUNLLElBQVYsR0FBaUJoQixJQUFqQixDQUFzQixVQUFBQyxNQUFNLEVBQUk7QUFDNUJOLFFBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxVQUFBQSxPQUFPLEVBQUUsSUFEUTtBQUVqQkMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZLLFlBQUFBLE9BQU8sRUFBRSxTQURQO0FBRUZPLFlBQUFBLElBQUksRUFBRWhCO0FBRko7QUFGVyxTQUFyQjtBQU9ILE9BUkQsV0FTVyxVQUFBUSxLQUFLLEVBQUk7QUFDWmQsUUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDakJDLFVBQUFBLE9BQU8sRUFBRSxLQURRO0FBRWpCQyxVQUFBQSxJQUFJLEVBQUU7QUFDRkssWUFBQUEsT0FBTyxFQUFFLE9BRFA7QUFFRk8sWUFBQUEsSUFBSSxFQUFFUjtBQUZKO0FBRlcsU0FBckI7QUFPSCxPQWpCTDtBQWtCSDs7O3lCQUNXZixHLEVBQUtDLEcsRUFBSyxDQUVyQjs7OzJCQUNhRCxHLEVBQUtDLEcsRUFBSyxDQUV2Qjs7OzRCQUNjRCxHLEVBQUtDLEcsRUFBSyxDQUV4Qjs7Ozs7O2VBR1VGLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtZXJnZW5jeSBmcm9tICcuLi9tb2RlbHMvbWlncmF0aW9ucy9FbWVyZ2VuY3knO1xyXG5cclxuY2xhc3MgRW1lcmdlbmN5Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgSW5kZXgocmVxLCByZXMpIHtcclxuICAgICAgICBFbWVyZ2VuY3kuZmluZCgpLnNvcnQoeydfaWQnOiAtMX0pLmV4ZWMoKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1JdGVtczogcmVzdWx0Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBTdG9yZShyZXEsIHJlcykge1xyXG4gICAgICAgIGNvbnN0IGVtZXJnZW5jeSA9IG5ldyBFbWVyZ2VuY3koe1xyXG4gICAgICAgICAgICBsYXQ6IHJlcS5ib2R5LmxhdCxcclxuICAgICAgICAgICAgbG5nOiByZXEuYm9keS5sbmcsXHJcbiAgICAgICAgICAgIGZyb206IHJlcS5ib2R5LmZyb20sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZW1lcmdlbmN5LnNhdmUoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBFZGl0KHJlcSwgcmVzKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIFVwZGF0ZShyZXEsIHJlcykge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBEZXN0cm95KHJlcSwgcmVzKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWVyZ2VuY3lDb250cm9sbGVyOyJdfQ==