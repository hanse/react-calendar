'use strict';

var React = require('react');

var CalendarControls = React.createClass({displayName: "CalendarControls",

  _onNext: function() {
    this.props.onNext();
  },

  _onPrev: function() {
    this.props.onPrev();
  },

  render: function() {
    if (this.props.calendarMonthShort) {
      return (
        React.createElement("div", {className: "clndr-controls"},
          React.createElement("span", {className: "icon-arrow-left", onClick: this._onPrev}),
          React.createElement("div", {className: "current-month"}, this.props.date.format('MMM YYYY')),
          React.createElement("span", {className: "icon-arrow-right", onClick: this._onNext})
        )
      );
    } else {
      return (
        React.createElement("div", {className: "clndr-controls"},
          React.createElement("span", {className: "icon-arrow-left", onClick: this._onPrev}),
          React.createElement("div", {className: "current-month"}, this.props.date.format('MMMM YYYY')),
          React.createElement("span", {className: "icon-arrow-right", onClick: this._onNext})
        )
      );
    }
  }
});

module.exports = CalendarControls;
