import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import createDateObjects from './createDateObjects';

export default class Calendar extends Component {

  static propTypes = {
    weekOffset: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    renderDay: PropTypes.func,
    onNextMonth: PropTypes.func.isRequired,
    onPrevMonth: PropTypes.func.isRequired,
    onPickDate: PropTypes.func
  }

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('YYYY-MM-D'),
  }

  render() {
    const { date, weekOffset, renderDay, onNextMonth, onPrevMonth, onPickDate } = this.props;

    let previousMonth = moment(Object.assign({}, date));
    previousMonth = previousMonth.subtract(1, "month").startOf("month").format('MMMM');

    let nextMonth = moment(Object.assign({}, date));
    nextMonth = nextMonth.add(1, "month").startOf("month").format('MMMM');

    const months = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const dates = [moment('20170505', 'YYYYMMDD'), moment('20170401', 'YYYYMMDD'), moment('20170405', 'YYYYMMDD'), moment()];

    return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <button onClick={onPrevMonth}>
            <i className='fa fa-angle-left' aria-hidden='true'></i>
            {previousMonth}
          </button>
          <div className='Calendar-header-currentDate'>{date.format('MMMM YYYY')}</div>
          <button onClick={onNextMonth}>
            {nextMonth}
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </button>
        </div>
        <div className='Calendar-grid Calendar-months'>
          {months.map((month, index) =>
            this.renderMonthLabel(month, index)
          )}
        </div>
        <div className='Calendar-grid Calendar-days'>
          {createDateObjects(date, weekOffset, dates).map((day, i) =>
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              onClick={(e) => onPickDate(day.day)}
            >
              {renderDay(day.day)}
              {this.renderEventCircle(day)}
            </div>
          )}
        </div>
      </div>
    );
  }

  renderMonthLabel(month, index) {
    return (
      <div className="Calendar-grid-item Calendar-month-item" key={`month-${index}`}>
        <span>{month}</span>
      </div>
    );
  }

  renderEventCircle(day) {
    if (day.classNames == 'Calendar-event-day') {
      return (
        <div className='Calendar-event-day-circle'></div>
      );
    }
  }
}
