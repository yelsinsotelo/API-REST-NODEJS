"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Equipment = _interopRequireDefault(require("../models/migrations/Equipment"));

var _Group = _interopRequireDefault(require("../models/migrations/Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GroupController = /*#__PURE__*/function () {
  function GroupController() {
    _classCallCheck(this, GroupController);
  }

  _createClass(GroupController, null, [{
    key: "Index",
    value: function Index(req, res) {
      _Group["default"].find().exec().then(function (result) {
        res.status(200).json({
          success: true,
          data: {
            message: "success",
            items: result,
            numItems: result.length
          }
        });
      })["catch"](function (error) {
        res.status(500).json({
          success: true,
          data: {
            message: "error",
            code: error
          }
        });
      });
    }
  }, {
    key: "Store",
    value: function Store(req, res) {
      var grupo = new _Group["default"]({
        name: req.body.group_name,
        equipments: req.body.group_item
      });
      grupo.save().then(function (result) {
        res.status(200).json({
          success: true,
          data: {
            message: 'success',
            code: result
          }
        });
      })["catch"](function (error) {
        res.status(500).json({
          success: true,
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
    value: function Update(req, res) {
      _Group["default"].findById(req.params.id).exec().then(function (result) {
        result.name = req.body.group_name;
        result.equipments = req.body.group_item;
        result.save().then(function (result1) {
          res.status(200).json({
            success: true,
            data: {
              message: 'success',
              code: result1
            }
          });
        })["catch"](function (error) {
          res.status(500).json({
            success: true,
            data: {
              message: 'error',
              code: error
            }
          });
        });
      })["catch"](function (error) {
        res.status(404).json({
          success: true,
          data: {
            message: 'error',
            code: error
          }
        });
      });
    }
  }, {
    key: "Destroy",
    value: function Destroy(req, res) {
      _Group["default"].findByIdAndDelete(req.params.id).exec().then(function (result) {
        res.status(200).json({
          success: true,
          data: {
            message: 'success',
            code: result
          }
        });
      })["catch"](function (error) {
        res.status(200).json({
          success: true,
          data: {
            message: 'error',
            code: error
          }
        });
      });
    }
  }]);

  return GroupController;
}();

var _default = GroupController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Hcm91cENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiR3JvdXBDb250cm9sbGVyIiwicmVxIiwicmVzIiwiR3JvdXAiLCJmaW5kIiwiZXhlYyIsInRoZW4iLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJtZXNzYWdlIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsImVycm9yIiwiY29kZSIsImdydXBvIiwibmFtZSIsImJvZHkiLCJncm91cF9uYW1lIiwiZXF1aXBtZW50cyIsImdyb3VwX2l0ZW0iLCJzYXZlIiwiZmluZEJ5SWQiLCJwYXJhbXMiLCJpZCIsInJlc3VsdDEiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLGU7Ozs7Ozs7MEJBQ1dDLEcsRUFBS0MsRyxFQUFLO0FBQ25CQyx3QkFBTUMsSUFBTixHQUFhQyxJQUFiLEdBQW9CQyxJQUFwQixDQUF5QixVQUFBQyxNQUFNLEVBQUk7QUFDL0JMLFFBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxVQUFBQSxPQUFPLEVBQUUsSUFEUTtBQUVqQkMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFlBQUFBLE9BQU8sRUFBRSxTQURQO0FBRUZDLFlBQUFBLEtBQUssRUFBRU4sTUFGTDtBQUdGTyxZQUFBQSxRQUFRLEVBQUVQLE1BQU0sQ0FBQ1E7QUFIZjtBQUZXLFNBQXJCO0FBUUgsT0FURCxXQVVXLFVBQUFDLEtBQUssRUFBSTtBQUNaZCxRQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsVUFBQUEsT0FBTyxFQUFFLElBRFE7QUFFakJDLFVBQUFBLElBQUksRUFBRTtBQUNGQyxZQUFBQSxPQUFPLEVBQUUsT0FEUDtBQUVGSyxZQUFBQSxJQUFJLEVBQUVEO0FB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LEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxVQUFBQSxPQUFPLEVBQUMsSUFEUztBQUVqQkMsVUFBQUEsSUFBSSxFQUFHO0FBQ0hDLFlBQUFBLE9BQU8sRUFBRyxTQURQO0FBRUhLLFlBQUFBLElBQUksRUFBR1Y7QUFGSjtBQUZVLFNBQXJCO0FBT0gsT0FSRCxXQVNPLFVBQUFTLEtBQUssRUFBSTtBQUNaZCxRQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsVUFBQUEsT0FBTyxFQUFDLElBRFM7QUFFakJDLFVBQUFBLElBQUksRUFBRztBQUNIQyxZQUFBQSxPQUFPLEVBQUcsT0FEUDtBQUVISyxZQUFBQSxJQUFJLEVBQUdEO0FBRko7QUFGVSxTQUFyQjtBQU9ILE9BakJEO0FBa0JIOzs7Ozs7ZUFHVWhCLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXF1aXBtZW50IGZyb20gJy4uL21vZGVscy9taWdyYXRpb25zL0VxdWlwbWVudCdcclxuaW1wb3J0IEdyb3VwIGZyb20gJy4uL21vZGVscy9taWdyYXRpb25zL0dyb3VwJ1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyBJbmRleChyZXEsIHJlcykge1xyXG4gICAgICAgIEdyb3VwLmZpbmQoKS5leGVjKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtSXRlbXM6IHJlc3VsdC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIFN0b3JlKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgY29uc3QgZ3J1cG8gPSBuZXcgR3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOiByZXEuYm9keS5ncm91cF9uYW1lLFxyXG4gICAgICAgICAgICBlcXVpcG1lbnRzOiByZXEuYm9keS5ncm91cF9pdGVtLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3J1cG8uc2F2ZSgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgRWRpdChyZXEsIHJlcykge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBVcGRhdGUocmVxLCByZXMpIHtcclxuICAgICAgICBHcm91cC5maW5kQnlJZChyZXEucGFyYW1zLmlkKS5leGVjKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHJlcS5ib2R5Lmdyb3VwX25hbWVcclxuICAgICAgICAgICAgcmVzdWx0LmVxdWlwbWVudHMgPSByZXEuYm9keS5ncm91cF9pdGVtXHJcbiAgICAgICAgICAgIHJlc3VsdC5zYXZlKCkudGhlbihyZXN1bHQxID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6J3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXN1bHQxLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOidlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNFxyXG4gICAgICAgICAgICAgICAgKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6J2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIERlc3Ryb3kocmVxLCByZXMpIHtcclxuICAgICAgICBHcm91cC5maW5kQnlJZEFuZERlbGV0ZShyZXEucGFyYW1zLmlkKS5leGVjKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZSA6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZSA6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwQ29udHJvbGxlcjsiXX0=