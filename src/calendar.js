/** @jsx React.DOM */
;(function(root) {

  moment.lang('nb')

  var Day = React.createClass({
    render: function() {
      return (
        <div className={this.props.day.classes}>
          <span className='day-number'>{this.props.day.day.date()}</span>
        </div>
      );
    }
  });

  var CalendarControls = React.createClass({

    next: function() {
      this.props.onNext();
    },

    prev: function() {
      this.props.onPrev();
    },

    render: function() {
      return (
        <div className='clndr-controls'>
          <div onClick={this.prev}>Prev</div>
          <div className='current-month'>{this.props.date.format('MMMM YYYY')}</div>
          <div onClick={this.next}>Next</div>
        </div>
      );
    }
  });

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
      this.setState({date: this.state.date.add('months', 1)});
    },

    prev: function() {
      this.setState({date: this.state.date.subtract('months', 1)});
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
        var start = moment(days[days.length-1].date).add('days', 1);
        while (days.length < 42) {
          days.push({day: moment(start), classes: 'next-month'});
          start.add('days', 1);
        }
      }

      return days;
    },

    render: function() {
      var renderDay = function(day) {
        return <Day day={day} />;
      };

      return (
        <div className='clndr'>
          <CalendarControls date={this.state.date} onNext={this.next} onPrev={this.prev} />
          <div className='clndr-grid'>
            <div className='days'>
              {this.days().map(renderDay)}
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
      );
    }
  });

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return Calendar;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calendar;
  } else {
    root.Calendar = Calendar;
  }

})(window);
