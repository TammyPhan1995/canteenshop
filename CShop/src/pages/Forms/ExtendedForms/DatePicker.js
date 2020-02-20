import React, { Component } from 'react';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import moment from 'moment';

export default class DatePicker extends Component {
  state = {
    date: moment(),
    startDate: moment(),
    endDate: moment(),
    dateRangeFocusedInput: null,

  };

  render() {
    let { date } = this.state;
    return (

      <SingleDatePicker
        date={date}
        onDateChange={date => this.setState({ date })}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
      />
    );
  }
}
