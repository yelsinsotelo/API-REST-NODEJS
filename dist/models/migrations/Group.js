"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var GroupSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  equipments: {
    type: Array,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Group', GroupSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvbWlncmF0aW9ucy9Hcm91cC5qcyJdLCJuYW1lcyI6WyJHcm91cFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJlcXVpcG1lbnRzIiwiQXJyYXkiLCJ0aW1lc3RhbXBzIiwidmVyc2lvbktleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFJQyxnQkFBSixDQUFXO0FBQzNCQyxFQUFBQSxJQUFJLEVBQUU7QUFBQ0MsSUFBQUEsSUFBSSxFQUFDQyxNQUFOO0FBQWNDLElBQUFBLFFBQVEsRUFBQyxJQUF2QjtBQUE2QkMsSUFBQUEsTUFBTSxFQUFDO0FBQXBDLEdBRHFCO0FBRTNCQyxFQUFBQSxVQUFVLEVBQUU7QUFBRUosSUFBQUEsSUFBSSxFQUFDSyxLQUFQO0FBQWNILElBQUFBLFFBQVEsRUFBQztBQUF2QjtBQUZlLENBQVgsRUFFMEI7QUFDdENJLEVBQUFBLFVBQVUsRUFBQyxJQUQyQjtBQUNyQkMsRUFBQUEsVUFBVSxFQUFDO0FBRFUsQ0FGMUIsQ0FBcEI7O2VBT2UscUJBQU0sT0FBTixFQUFlVixXQUFmLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgbW9kZWx9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IEdyb3VwU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBuYW1lOiB7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWUsIHVuaXF1ZTp0cnVlfSxcclxuICAgIGVxdWlwbWVudHM6IHsgdHlwZTpBcnJheSwgcmVxdWlyZWQ6dHJ1ZX19LHtcclxuICAgICAgICB0aW1lc3RhbXBzOnRydWUsIHZlcnNpb25LZXk6ZmFsc2VcclxuICAgIH1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kZWwoJ0dyb3VwJywgR3JvdXBTY2hlbWEpOyJdfQ==