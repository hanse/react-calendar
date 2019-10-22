"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _createDateObjects = _interopRequireDefault(require("./createDateObjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleNextMonth", function () {
      if (_this.props.onNextMonth) {
        return _this.props.onNextMonth();
      }

      _this.props.onChangeMonth(_this.props.date.clone().add(1, 'months'));
    });

    _defineProperty(_assertThisInitialized(_this), "handlePrevMonth", function () {
      if (_this.props.onPrevMonth) {
        return _this.props.onPrevMonth();
      }

      _this.props.onChangeMonth(_this.props.date.clone().subtract(1, 'months'));
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date = _this$props.date,
          weekOffset = _this$props.weekOffset,
          renderDay = _this$props.renderDay,
          renderHeader = _this$props.renderHeader,
          onPickDate = _this$props.onPickDate,
          contentClassName = _this$props.contentClassName,
          containerClassName = _this$props.containerClassName;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('Calendar', containerClassName)
      }, renderHeader({
        date: date,
        onPrevMonth: this.handlePrevMonth,
        onNextMonth: this.handleNextMonth
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('Calendar-grid', contentClassName)
      }, (0, _createDateObjects.default)(date, weekOffset).map(function (day, i) {
        return renderDay(_objectSpread({}, day, {
          onPickDate: onPickDate
        }));
      })));
    }
  }]);

  return Calendar;
}(_react.Component);

exports.default = Calendar;

_defineProperty(Calendar, "propTypes", {
  /** Week offset*/
  weekOffset: _propTypes.default.number.isRequired,

  /** The current date as a moment objecct */
  date: _propTypes.default.object.isRequired,

  /** Function to render a day cell */
  renderDay: _propTypes.default.func,

  /** Function to render the header */
  renderHeader: _propTypes.default.func,

  /** Called on next month click */
  onNextMonth: _propTypes.default.func,

  /** Called on prev month click */
  onPrevMonth: _propTypes.default.func,

  /** Called when some of the navigation controls are clicked */
  onChangeMonth: _propTypes.default.func,

  /** Called when a date is clicked */
  onPickDate: _propTypes.default.func,

  /** classname for div wrapping the whole calendar */
  containerClassName: _propTypes.default.string,

  /** classname for the div wrapping the grid */
  contentClassName: _propTypes.default.string
});

_defineProperty(Calendar, "defaultProps", {
  weekOffset: 0,
  renderDay: function renderDay(_ref) {
    var day = _ref.day,
        classNames = _ref.classNames,
        onPickDate = _ref.onPickDate;
    return _react.default.createElement("div", {
      key: day.format(),
      className: (0, _classnames.default)('Calendar-grid-item', day.isSame((0, _moment.default)(), 'day') && 'Calendar-grid-item--current', classNames),
      onClick: function onClick(e) {
        return onPickDate(day);
      }
    }, day.format('D'));
  },
  renderHeader: function renderHeader(_ref2) {
    var date = _ref2.date,
        onPrevMonth = _ref2.onPrevMonth,
        onNextMonth = _ref2.onNextMonth;
    return _react.default.createElement("div", {
      className: "Calendar-header"
    }, _react.default.createElement("button", {
      onClick: onPrevMonth
    }, "\xAB"), _react.default.createElement("div", {
      className: "Calendar-header-currentDate"
    }, date.format('MMMM YYYY')), _react.default.createElement("button", {
      onClick: onNextMonth
    }, "\xBB"));
  }
});