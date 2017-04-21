import React, { Component, PropTypes } from 'react';
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

    return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <button onClick={onPrevMonth}>{`<`} {previousMonth}</button>
          <div className='Calendar-header-currentDate'>{date.format('MMMM YYYY')}</div>
          <button onClick={onNextMonth}>{nextMonth} {`>`}</button>
        </div>
        <div className='Calendar-grid Calendar-months'>
          {months.map((month, index) =>
            this.renderMonthLabel(month, index)
          )}
        </div>
        <div className='Calendar-grid'>
          {createDateObjects(date, weekOffset).map((day, i) =>
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              onClick={(e) => onPickDate(day.day)}
            >
              {renderDay(day.day)}
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
}
