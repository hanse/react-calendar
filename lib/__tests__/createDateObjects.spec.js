"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _createDateObjects = _interopRequireDefault(require("../createDateObjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('createDateObjects', function () {
  for (var month = 0; month < 12; month++) {
    var date = _moment["default"].utc([2016, month, 1]);

    expect((0, _createDateObjects["default"])(date)).toMatchSnapshot();
  }
});