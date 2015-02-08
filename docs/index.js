var React = require('react');
var {Calendar} = require('../src');

function datePicked(date) {
  console.log(date);
}

React.render(
	<Calendar showDaysOfWeek={true}
            onPickDate={datePicked} />,
	document.getElementById('calendar')
);
