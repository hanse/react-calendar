import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Calendar } from 'react-calendar-component';
import DayCell from './DayCell';
import './style.css';

const initialState = [
  {
    id: 1,
    title: 'Calendar Meetup',
    date: moment([2017, 10, 8])
  },
  {
    id: 2,
    title: 'Dentist',
    date: moment([2017, 10, 8])
  },
  {
    id: 3,
    title: 'Birthday Party',
    date: moment([2017, 10, 10])
  }
].reduce((events, event) => {
  const key = event.date.format('YYYY-MM-DD');
  events[key] = (events[key] || []).concat([event]);
  return events;
}, {});

const eventsByDate = (state = initialState) => state;

const store = createStore(combineReducers({ eventsByDate }));

class App extends React.Component {
  state = {
    date: moment([2017, 10, 8])
  };

  render() {
    return (
      <Calendar
        date={this.state.date}
        onChangeMonth={date => this.setState({ date })}
        renderDay={props => (
          <DayCell key={props.day.format('YYYY-MM-DD')} {...props} />
        )}
      />
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
