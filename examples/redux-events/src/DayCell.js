/* eslint-disable react/prop-types */

import React from 'react';
import moment from 'moment';
import cx from 'classnames';
import { connect } from 'react-redux';

const DayCell = ({ day, classNames, events }) => (
  <div
    className={cx(
      'Calendar-grid-item',
      day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
      classNames
    )}
  >
    <div className="Calendar-cell-header">
      <span>{day.format('DD')}</span>
    </div>
    {events.map(event => <li key={event.id}>{event.title}</li>)}
  </div>
);

export default connect((state, props) => ({
  events: state.eventsByDate[props.day.format('YYYY-MM-DD')] || []
}))(DayCell);
