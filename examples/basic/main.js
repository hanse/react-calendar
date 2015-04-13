var React = require('react');
var {Calendar} = require('../../src');
var moment = require('moment');
// require('moment/locale/nb');

function datePicked(date) {
  console.log(date);
}


React.render(
  <Calendar showDaysOfWeek={true}
            date={new Date()}
            onPickDate={datePicked} />,
  document.getElementById('calendar')
);
