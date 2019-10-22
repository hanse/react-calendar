"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FlavioHook = function FlavioHook(_ref) {
  var props = _extends({}, _ref);

  var prop = _extends({}, props);

  return _react["default"].createElement("div", {
    style: {
      padding: 48
    }
  }, _react["default"].createElement("h1", null, "Hello Flavio Hook Component"), prop.subtitle ? _react["default"].createElement("h5", null, prop.subtitle) : null);
};

var _default = FlavioHook;
exports["default"] = _default;