'use strict';

var React = require('react');
var moment = require('moment');

var Day = React.createClass({displayName: "Day",

  getDefaultProps: function() {
    return {
      classes: ''
    };
  },

  _onClick: function() {
    if (this.props.onClick)
      this.props.onClick(this.extractDate(true));
  },

  isSelectedClass: function() {
    var selectedDateNumber = this.extractDate(), weekClass = '';

    if (this.props.selectedOption.show === 'day' && selectedDateNumber === Number(this.props.day.day.date())) {
      weekClass = 'selected-day';
    }

    return weekClass;
  },

  extractDate: function(fromCurrent) {
    var date = null, formattedDate = null;

    if (this.props.selectedOption.show === 'day') {
      if (fromCurrent) {
        date = this.props.day.day.year() + "-" + this.props.day.day.month() + "-" + this.props.day.day.date();
      } else {
        formattedDate = this.props.selectedOption.day.split("-");
        date = formattedDate.length > 1
          ? moment().year(formattedDate[0]).month(formattedDate[1] - 1).date(formattedDate[2]).date()
          : [];
      }
    }

    return date;
  },

  render: function() {
    return (
      React.createElement("div", {
          onClick: this._onClick,
          className: this.props.day.classes + " " + this.isSelectedClass(),
        },
        React.createElement("span", {className: "day-number"}, this.props.day.day.date())
      )
    );
  }
});

module.exports = Day;
