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
    var selectedDateNumber = this.extractDate(),
        weekClass = '',
        currentDay = moment().format('YYYY-MM-DD'),
        componentDay = moment([this.props.day.day.year(), this.props.day.day.month(), this.props.day.day.date()]).format('YYYY-MM-DD'),
        isUntilDate = (selectedDateNumber && this.props.untilDate),
        isComponentDateInRange = (componentDay >= currentDay && componentDay <= selectedDateNumber),
        isSelectedDay = (this.props.selectedOption.show === 'day' && selectedDateNumber === this.props.day.day.format('YYYY-MM-DD'));

    if (isUntilDate && isComponentDateInRange || isSelectedDay) {
      weekClass = 'selected-day';
    }

    return weekClass;
  },

  extractDate: function(fromCurrent) {
    var date = null, formattedDate = null;

    if (this.props.selectedOption.show === 'day') {
      if (fromCurrent) {
        date = moment([this.props.day.day.year(), this.props.day.day.month(), this.props.day.day.date()]).format('YYYY-MM-DD');
      } else {
        formattedDate = this.props.selectedOption.day.split("-");
        date = formattedDate.length > 1
            //use minus one, to convert months into right format
            ? moment([formattedDate[0], formattedDate[1] - 1, formattedDate[2]]).format('YYYY-MM-DD')
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
