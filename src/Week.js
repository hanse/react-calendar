'use strict';

var React = require('react');
var Day = require('./Day');
var moment = require('moment');

var Week = React.createClass({displayName: "Week",

  getDefaultProps: function() {
    return {
      classes: ''
    };
  },

  _onClick: function(date) {
    if (this.props.onClick) {
      if (this.props.selectedOption.show === 'week') {
        this.props.onClick(this.extractDate(true));
      } else {
        this.props.onClick(date);
      }
    }
  },

  isSelectedClass: function(date) {
    var selectedDateNumber = this.extractDate(), weekClass = '';

    if (this.props.selectedOption.show === 'week' && selectedDateNumber === Number(date[0].day.week())) {
      weekClass = 'selected-week';
    }

    return weekClass;
  },

  extractDate: function(fromCurrent) {
    var date = null, formattedDate = null;

    if (this.props.selectedOption.show === 'week') {
      if (fromCurrent) {
        date = this.props.week[0].day.year() + "-" + this.props.week[0].day.week();
      } else {
        formattedDate = this.props.selectedOption.week.split("-");

        date = formattedDate.length > 1
          ? moment().year(formattedDate[0]).week(formattedDate[1]).week()
          : null;
      }
    }

    return date;
  },

  render: function() {
    return (
      React.createElement("div", {
          className: "days " + this.isSelectedClass(this.props.week),
          onClick: this._onClick},

        this.props.week.map(function(day, i)  {
          return React.createElement(Day, {
              selectedOption: this.props.selectedOption,
              key: 'day-' + i,
              day: day,
              onClick: this._onClick}
          );
        }.bind(this))
      )
    );
  }
});

module.exports = Week;
