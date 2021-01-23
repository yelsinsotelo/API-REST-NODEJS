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

var UsersController = /*#__PURE__*/function () {
  function UsersController() {
    _classCallCheck(this, UsersController);
  }

  _createClass(UsersController, null, [{
    key: "Index",
    value: function Index(req, res) {
      _Users["default"].find().exec().then(function (result) {
        res.json({
          success: true,
          data: result
        });
      })["catch"](function (e) {
        return res.json({
          success: false,
          error: e
        });
      });
    }
  }, {
    key: "Store",
    value: function Store(req, res) {
      var _req$body = req.body,
          equipment = _req$body.equipment,
          user_address = _req$body.user_address,
          user_cellphone = _req$body.user_cellphone,
          user_control_id = _req$body.user_control_id,
          user_name = _req$body.user_name,
          user_email = _req$body.user_email;
      var newUSer = new _Users["default"]({
        name: user_name,
        address: user_address,
        cellphone: user_cellphone,
        idControl: user_control_id,
        idEquipment: equipment,
        email: user_email
      });
      newUSer.save().then(function (result) {
        _Users["default"].find().exec().then(function (result) {
          res.json({
            success: true,
            data: {
              items: result,
              message: 'success'
            }
          });
        });
      })["catch"](function (e) {
        return _Users["default"].find().exec().then(function (result) {
          res.json({
            success: false,
            data: {
              items: result,
              message: 'error'
            },
            error: e
          });
        });
      });
    }
  }, {
    key: "Edit",
    value: function Edit(req, res) {}
  }, {
    key: "Update",
    value: function Update(req, res) {
      _Users["default"].findById(req.params.id).exec().then(function (result) {
        result.name = req.body.user_name;
        result.address = req.body.user_address;
        result.cellphone = req.body.user_cellphone;
        result.idControl = req.body.user_control_id;
        result.idEquipment = req.body.equipment;
        result.email = req.body.user_email;
        result.save().then(function (result) {
          res.json({
            success: true,
            data: {
              message: 'success',
              code: result
            }
          });
        })["catch"](function (error) {
          res.json({
            success: false,
            data: {
              message: 'error',
              code: error
            }
          });
        });
      })["catch"](function (error) {
        res.json({
          success: false,
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
      _Users["default"].findByIdAndDelete(req.params.id).exec().then(function (result) {
        res.json({
          success: true,
          data: {
            message: 'success',
            code: result
          }
        });
      })["catch"](function (error) {
        res.json({
          success: false,
          data: {
            message: 'error',
            code: error
          }
        });
      });
    }
  }]);

  return UsersController;
}();

var _default = UsersController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJVc2Vyc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJVc2VycyIsImZpbmQiLCJleGVjIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImUiLCJlcnJvciIsImJvZHkiLCJlcXVpcG1lbnQiLCJ1c2VyX2FkZHJlc3MiLCJ1c2VyX2NlbGxwaG9uZSIsInVzZXJfY29udHJvbF9pZCIsInVzZXJfbmFtZSIsInVzZXJfZW1haWwiLCJuZXdVU2VyIiwibmFtZSIsImFkZHJlc3MiLCJjZWxscGhvbmUiLCJpZENvbnRyb2wiLCJpZEVxdWlwbWVudCIsImVtYWlsIiwic2F2ZSIsIml0ZW1zIiwibWVzc2FnZSIsImZpbmRCeUlkIiwicGFyYW1zIiwiaWQiLCJjb2RlIiwiZmluZEJ5SWRBbmREZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxlOzs7Ozs7OzBCQUNXQyxHLEVBQUtDLEcsRUFBSztBQUNuQkMsd0JBQU1DLElBQU4sR0FBYUMsSUFBYixHQUNLQyxJQURMLENBQ1UsVUFBQUMsTUFBTSxFQUFJO0FBQ1pMLFFBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTO0FBQ0xDLFVBQUFBLE9BQU8sRUFBRSxJQURKO0FBRUxDLFVBQUFBLElBQUksRUFBRUg7QUFGRCxTQUFUO0FBSUgsT0FOTCxXQU9XLFVBQUFJLENBQUM7QUFBQSxlQUNKVCxHQUFHLENBQUNNLElBQUosQ0FBUztBQUNMQyxVQUFBQSxPQUFPLEVBQUUsS0FESjtBQUVMRyxVQUFBQSxLQUFLLEVBQUVEO0FBRkYsU0FBVCxDQURJO0FBQUEsT0FQWjtBQWFIOzs7MEJBQ1lWLEcsRUFBS0MsRyxFQUFLO0FBQUEsc0JBQ3lFRCxHQUFHLENBQUNZLElBRDdFO0FBQUEsVUFDWEMsU0FEVyxhQUNYQSxTQURXO0FBQUEsVUFDQUMsWUFEQSxhQUNBQSxZQURBO0FBQUEs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bUIsY0FBQUEsT0FBTyxFQUFFLE9BRFA7QUFFRkksY0FBQUEsSUFBSSxFQUFFckI7QUFGSjtBQUZELFdBQVQ7QUFPSCxTQW5CTDtBQXFCSCxPQTdCTCxXQStCUSxVQUFBQSxLQUFLLEVBQUk7QUFDTFYsUUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFDTEMsVUFBQUEsT0FBTyxFQUFFLEtBREo7QUFFTEMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZtQixZQUFBQSxPQUFPLEVBQUUsT0FEUDtBQUVGSSxZQUFBQSxJQUFJLEVBQUVyQjtBQUZKO0FBRkQsU0FBVDtBQU9ILE9BdkNUO0FBeUNIOzs7NEJBQ2NYLEcsRUFBS0MsRyxFQUFLO0FBQ3JCQyx3QkFBTStCLGlCQUFOLENBQXdCakMsR0FBRyxDQUFDOEIsTUFBSixDQUFXQyxFQUFuQyxFQUF1QzNCLElBQXZDLEdBQ0tDLElBREwsQ0FDVSxVQUFBQyxNQUFNLEVBQUk7QUFDWkwsUUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFDTEMsVUFBQUEsT0FBTyxFQUFFLElBREo7QUFFTEMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZtQixZQUFBQSxPQUFPLEVBQUUsU0FEUDtBQUVGSSxZQUFBQSxJQUFJLEVBQUUxQjtBQUZKO0FBRkQsU0FBVDtBQU9ILE9BVEwsV0FXVyxVQUFBSyxLQUFLLEVBQUk7QUFDWlYsUUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFDTEMsVUFBQUEsT0FBTyxFQUFFLEtBREo7QUFFTEMsVUFBQUEsSUFBSSxFQUFFO0FBQ0ZtQixZQUFBQSxPQUFPLEVBQUUsT0FEUDtBQUVGSSxZQUFBQSxJQUFJLEVBQUVyQjtBQUZKO0FBRkQsU0FBVDtBQU9ILE9BbkJMO0FBb0JIOzs7Ozs7ZUFJVVosZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL21pZ3JhdGlvbnMvVXNlcnMnO1xyXG5cclxuY2xhc3MgVXNlcnNDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyBJbmRleChyZXEsIHJlcykge1xyXG4gICAgICAgIFVzZXJzLmZpbmQoKS5leGVjKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IChcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIFN0b3JlKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBlcXVpcG1lbnQsIHVzZXJfYWRkcmVzcywgdXNlcl9jZWxscGhvbmUsIHVzZXJfY29udHJvbF9pZCwgdXNlcl9uYW1lICwgdXNlcl9lbWFpbH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBuZXdVU2VyID0gbmV3IFVzZXJzKHtcclxuICAgICAgICAgICAgbmFtZTogdXNlcl9uYW1lLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiB1c2VyX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGNlbGxwaG9uZTogdXNlcl9jZWxscGhvbmUsXHJcbiAgICAgICAgICAgIGlkQ29udHJvbDogdXNlcl9jb250cm9sX2lkLFxyXG4gICAgICAgICAgICBpZEVxdWlwbWVudDogZXF1aXBtZW50LFxyXG4gICAgICAgICAgICBlbWFpbDp1c2VyX2VtYWlsLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZXdVU2VyLnNhdmUoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIFVzZXJzLmZpbmQoKS5leGVjKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgVXNlcnMuZmluZCgpLmV4ZWMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICApKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIEVkaXQocmVxLCByZXMpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIFVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgICAgIFVzZXJzLmZpbmRCeUlkKHJlcS5wYXJhbXMuaWQpLmV4ZWMoKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXEuYm9keS51c2VyX25hbWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkcmVzcyA9IHJlcS5ib2R5LnVzZXJfYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5jZWxscGhvbmUgPSByZXEuYm9keS51c2VyX2NlbGxwaG9uZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pZENvbnRyb2wgPSByZXEuYm9keS51c2VyX2NvbnRyb2xfaWQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWRFcXVpcG1lbnQgPSByZXEuYm9keS5lcXVpcG1lbnQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZW1haWwgPSByZXEuYm9keS51c2VyX2VtYWlsO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNhdmUoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgc3RhdGljIERlc3Ryb3kocmVxLCByZXMpIHtcclxuICAgICAgICBVc2Vycy5maW5kQnlJZEFuZERlbGV0ZShyZXEucGFyYW1zLmlkKS5leGVjKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNDb250cm9sbGVyOyBcclxuIl19