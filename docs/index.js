var React = require('react');
var {Calendar} = require('../src');

React.render(
	<Calendar showDaysOfWeek={true} />,
	document.getElementById('calendar')
);
