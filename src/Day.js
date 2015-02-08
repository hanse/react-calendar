'use strict';

var React = require('react');

var Day = React.createClass({

  getDefaultProps: function() {
    return {
      classes: ''
    };
  },

  _onClick: function() {
    if (this.props.onClick)
      this.props.onClick(this.props.day.day);
  },

  render: function() {
    return (
      <div onClick={this._onClick} className={this.props.day.classes}>
        <span className='day-number'>{this.props.day.day.date()}</span>
      </div>
    );
  }
});

module.exports = Day;
