import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../Calendar';
import renderer from 'react-test-renderer';

test('Calendar renders with minimal props', () => {
  const today = moment('2017-11-01T07:00:00');
  const component = renderer.create(<Calendar date={today} weekOffset={0} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Calendar renders with weekOffset=1', () => {
  const today = moment('2017-11-01T07:00:00');
  const component = renderer.create(<Calendar date={today} weekOffset={1} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Calendar renders with custom day render', () => {
  const today = moment('2017-11-01T07:00:00');
  const renderDay = day => <span>{day.format('D')}</span>;
  const component = renderer.create(
    <Calendar date={today} renderDay={renderDay} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Calendar renders with custom header render', () => {
  const today = moment('2017-11-01T07:00:00');
  const renderHeader = ({ date, onPrevMonth, onNextMonth }) => (
    <div>
      <div className="Calendar-header">
        <button onClick={onPrevMonth}>«</button>
        <div className="Calendar-header-currentDate">
          {date.format('MMMM YYYY')}
        </div>
        <button onClick={onNextMonth}>»</button>
      </div>
      <div className="Calendar-grid Calendar-week-day-names mb-sm">
        <div className="Calendar-grid-item">Mon</div>
        <div className="Calendar-grid-item">Tue</div>
        <div className="Calendar-grid-item">Wed</div>
        <div className="Calendar-grid-item">Thu</div>
        <div className="Calendar-grid-item">Fri</div>
        <div className="Calendar-grid-item">Sat</div>
        <div className="Calendar-grid-item">Sun</div>
      </div>
    </div>
  );
  // somehow react/prop-types looks at renderHeader as an own component -> add prop types
  renderHeader.propTypes = {
    date: PropTypes.object,
    onPrevMonth: PropTypes.func,
    onNextMonth: PropTypes.func
  };

  const component = renderer.create(
    <Calendar date={today} renderHeader={renderHeader} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
