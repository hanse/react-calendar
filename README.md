# react-calendar

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

# Contributing

run these commands to get a watched build of the demo. (no live reload)
```bash
$ npm install
$ npm run watch
```

# License
MIT
