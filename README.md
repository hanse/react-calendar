# react-calendar

This is an extension of original repository.

What were added?

- selectedOption (Object)
- untilDate (Boolean)

selectedOption structure

```js
 {
    show: 'day|week',
    day|week: 'YYYY-MM-D | YYYY-W'
 }
```

allows user

Example:
  { show: 'day', day: moment().format('YYYY-MM-DD') }
  { show: 'week', day: moment().format('YYYY-W') }


    <Calendar selectedOption={this.state.selectedOption} showDaysOfWeek={true} forceSixRows={false}
            untilDate={true} onPickDate={this.datePicked.bind(this)}/>




[React](http://facebook.github.io/react/) calendar component inspired by [CLNDR.js](http://kylestetz.github.io/CLNDR/).

```
$ npm install react-calendar-component
```

# See the demo
http://hanse.github.io/react-calendar/

```js
var React = require('react');
var Calendar = require('react-calendar-component').Calendar;

function onDatePicked(date) {
  alert(date);
}

React.render(
  <Calendar showDaysOfWeek={true}
            forceSixRows={false}
            onPickDate={onDatePicked} />,
  document.getElementById('calendar')
);
```


# Build it yourself

```bash
$ npm install
$ make
```

# License
MIT


#Contributors
Vladimir Katansky, Svyatoslav Dardalan