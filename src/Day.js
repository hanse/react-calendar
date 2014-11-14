'use strict';

var React = require('react');

var Day = React.createClass({

  getDefaultProps: function() {
    return {
      classes: ''
    };
  },

  render: function() {
    return (
      <div className={this.props.day.classes}>
        <span className='day-number'>{this.props.day.day.date()}</span>
      </div>
    );
  }
});

module.exports = Day;
