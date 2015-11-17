import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';

class CalendarExample extends Component {
  state = {
    date: moment()
  }

  render() {
    return (
      <Calendar
        onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
        onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
        date={this.state.date}
        onPickDate={(date) => console.log(date)}
        renderDay={(day) => day.format('D')}
      />
    );
  }
}

render(
  <CalendarExample />,
  document.getElementById('calendar')
);
