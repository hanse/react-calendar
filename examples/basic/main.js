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
        renderDay={date => (
          <span
            style={{
              fontWeight: date.isSame(moment(), 'day') ? 700 : 400
            }}
          >
            {date.format('D')}
          </span>
        )}
      />
    );
  }
}

render(<CalendarExample />, document.getElementById('calendar'));
