"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var EmergencySchema = new _mongoose.Schema({
  lat: {
    type: String,
    required: true,
    "default": null
  },
  lng: {
    type: String,
    required: true,
    "default": null
  },
  from: {
    type: String,
    required: true,
    "default": null
  },
  state: {
    type: String,
    required: true,
    "default": null
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Emergency', EmergencySchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvbWlncmF0aW9ucy9FbWVyZ2VuY3kuanMiXSwibmFtZXMiOlsiRW1lcmdlbmN5U2NoZW1hIiwiU2NoZW1hIiwibGF0IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibG5nIiwiZnJvbSIsInN0YXRlIiwidGltZXN0YW1wcyIsInZlcnNpb25LZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsSUFBSUMsZ0JBQUosQ0FBVztBQUMvQkMsRUFBQUEsR0FBRyxFQUFDO0FBQUNDLElBQUFBLElBQUksRUFBRUMsTUFBUDtBQUFlQyxJQUFBQSxRQUFRLEVBQUMsSUFBeEI7QUFBOEIsZUFBUztBQUF2QyxHQUQyQjtBQUUvQkMsRUFBQUEsR0FBRyxFQUFDO0FBQUNILElBQUFBLElBQUksRUFBRUMsTUFBUDtBQUFlQyxJQUFBQSxRQUFRLEVBQUMsSUFBeEI7QUFBOEIsZUFBUztBQUF2QyxHQUYyQjtBQUcvQkUsRUFBQUEsSUFBSSxFQUFDO0FBQUNKLElBQUFBLElBQUksRUFBRUMsTUFBUDtBQUFlQyxJQUFBQSxRQUFRLEVBQUMsSUFBeEI7QUFBK0IsZUFBUztBQUF4QyxHQUgwQjtBQUkvQkcsRUFBQUEsS0FBSyxFQUFDO0FBQUNMLElBQUFBLElBQUksRUFBRUMsTUFBUDtBQUFlQyxJQUFBQSxRQUFRLEVBQUMsSUFBeEI7QUFBOEIsZUFBUztBQUF2QztBQUp5QixDQUFYLEVBTXRCO0FBQUNJLEVBQUFBLFVBQVUsRUFBQyxJQUFaO0FBQWtCQyxFQUFBQSxVQUFVLEVBQUM7QUFBN0IsQ0FOc0IsQ0FBeEI7O2VBUWUscUJBQU0sV0FBTixFQUFtQlYsZUFBbkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLCBtb2RlbH0gZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBFbWVyZ2VuY3lTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIGxhdDp7dHlwZTogU3RyaW5nLCByZXF1aXJlZDp0cnVlLCBkZWZhdWx0OiBudWxsfSxcclxuICAgIGxuZzp7dHlwZTogU3RyaW5nLCByZXF1aXJlZDp0cnVlLCBkZWZhdWx0OiBudWxsfSxcclxuICAgIGZyb206e3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6dHJ1ZSAsIGRlZmF1bHQ6IG51bGx9LFxyXG4gICAgc3RhdGU6e3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6dHJ1ZSwgZGVmYXVsdDogbnVsbH0gLFxyXG5cclxufSx7dGltZXN0YW1wczp0cnVlLCB2ZXJzaW9uS2V5OmZhbHNlfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGVsKCdFbWVyZ2VuY3knLCBFbWVyZ2VuY3lTY2hlbWEpOyJdfQ==