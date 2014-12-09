'use strict';

var React = require('react');
var moment = require('moment');
var Day = require('./Day');
var CalendarControls = require('./CalendarControls');

var Calendar = React.createClass({

  getDefaultProps: function() {
    return {
      weekOffset: 0,
      lang: 'en',
      forceSixRows: false,
    };
  },

  getInitialState: function() {
    return {
      date: moment()
    };
  },

  next: function() {
    this.setState({date: this.state.date.add(1, 'months')});
  },

  prev: function() {
    this.setState({date: this.state.date.subtract(1, 'months')});
  },

  createDay: function(day) {
    return {
      day: day.date(),
      date: day
    };
  },

  /**
   * Return an array of days for the current month
   */

  days: function() {
    var days = [];
    var date = this.state.date.startOf('month');
    var diff = date.weekday() - this.props.weekOffset;
    if (diff < 0) diff += 7;

    var i;
    for (var i = 0; i < diff; i++) {
      var day = moment([this.state.date.year(), this.state.date.month(), i-diff+1])
      days.push({day: day, classes: 'prev-month'});
    }

    var numberOfDays = date.daysInMonth();
    for (i = 1; i <= numberOfDays; i++) {
      var day = moment([this.state.date.year(), this.state.date.month(), i]);
      days.push({day: day});
    }

    i = 1;
    while (days.length % 7 !== 0) {
      var day = moment([this.state.date.year(), this.state.date.month(), numberOfDays+i]);
      days.push({day: day, classes: 'next-month'});
      i++;
    }

    if (this.props.forceSixRows && days.length !== 42) {
      var start = moment(days[days.length-1].date).add(1, 'days');
      while (days.length < 42) {
        days.push({day: moment(start), classes: 'next-month'});
        start.add(1, 'days');
      }
    }

    return days;
  },

  daysOfWeek: function() {
    var daysOfWeek = [], days = this.days(), i = 0;
    while (i < 7) {
      //var dayLabel = days[i].day.format('dd');  <-- this logically should work, but for some reason it doesn't... moment for other month view bug??
      var dayOfWeek = moment(days[i].day.toDate()).format('dd'); // <-- rendundant but works everytime...
      daysOfWeek.push(dayOfWeek);
      i++;
    }
    return daysOfWeek;
  },

  render: function() {
    var renderDay = function(day, i) {
      return <Day key={'day-' + i} day={day} />;
    };

    var renderDaysOfWeek = function(dayLabel) {
      return <div>{dayLabel}</div>;
    };

    return (
      <div className='clndr'>
        <CalendarControls date={this.state.date} onNext={this.next} onPrev={this.prev} />
        <div className='clndr-grid'>
          <div className='days daysOfWeek'>
            {this.daysOfWeek().map(renderDaysOfWeek)}
          </div>
          <div className='days'>
            {this.days().map(renderDay)}
          </div>
          <div className='clearfix'></div>
        </div>
      </div>
    );
  }
});

module.exports = Calendar;
