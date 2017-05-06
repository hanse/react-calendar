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
  };

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('YYYY-MM-D')
  };

  render() {
    const {
      date,
      weekOffset,
      renderDay,
      onNextMonth,
      onPrevMonth,
      onPickDate
    } = this.props;
    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <button onClick={onPrevMonth}>«</button>
          <div className="Calendar-header-currentDate">
            {date.format('MMMM YYYY')}
          </div>
          <button onClick={onNextMonth}>»</button>
        </div>
        <div className="Calendar-grid">
          {createDateObjects(date, weekOffset).map((day, i) => (
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              onClick={e => onPickDate(day.day)}
            >
              {renderDay(day.day)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
