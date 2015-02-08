var React = require('react');
var {Calendar} = require('react-calendar-component');

require('moment/locale/nb');

function datePicked(date) {
  console.log(date);
}

console.log('Hello World')

React.render(
  <Calendar showDaysOfWeek={true}
            onPickDate={datePicked} />,
  document.getElementById('calendar')
);
