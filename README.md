# react-calendar

[React](http://facebook.github.io/react/) calendar component inspired by
[CLNDR.js](http://kylestetz.github.io/CLNDR/).

```
$ npm install react-calendar-component
```

Note: the npm name is `react-calendar-component`!

This is a low-level component for rendering monthly calendars using React. The
component will call `renderDay` and `renderHeader` functions provided by you to
make a calendar for the month of the given `Date`. Very basic default
implementations are provided for both, but they can be overridden to fit your
use case. This
[example](https://github.com/Hanse/react-calendar/tree/master/examples/basic)
shows how to create a regular grid calendar.

# Live Demo

http://hanse.github.io/react-calendar/

# Usage

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';

class CalendarExample extends Component {
  state = {
    date: moment()
  };

  render() {
    return (
      <Calendar
        onChangeMonth={date => this.setState({ date })}
        date={this.state.date}
        onPickDate={date => console.log(date)}
        renderDay={({ day, classNames, onPickDate }) => (
          <div
            key={day.format()}
            className={cx(
              'Calendar-grid-item',
              day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
              classNames
            )}
            onClick={e => onPickDate(day)}
          >
            {day.format('D')}
          </div>
        )}
        renderHeader={({ date, onPrevMonth, onNextMonth }) => (
          <div className="Calendar-header">
            <button onClick={onPrevMonth}>«</button>
            <div className="Calendar-header-currentDate">
              {date.format('MMMM YYYY')}
            </div>
            <button onClick={onNextMonth}>»</button>
          </div>
        )}
      />
    );
  }
}

render(<CalendarExample />, document.getElementById('calendar'));
```

# License

MIT
