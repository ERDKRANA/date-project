import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
class CustomDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_date: new Date(),
      second_date: new Date(),
      duration: "",
    };
  }
  handleFirstData = (e) => {
    console.log(e.target.value);
    this.setState({ first_date: e.target.value });
  };
  handleSecondData = (e) => {
    console.log(e.target.value);
    this.setState({ second_date: e.target.value });
  };
  handleDuration = (e) => {
    let hour =Number(e.target.value) ;
    this.setState({ duration: e.target.value });
    let newDate = this.state.first_date;
    if(hour >0){
      newDate.setUTCHours(newDate.getHours() + (hour - 6));
      this.setState({ second_date: newDate , });
    }

  };
  render() {
    const { first_date, second_date, duration } = this.state;
    console.log(first_date, second_date);
    return (
      <div>
        <div>
          <DateTimePicker
            onChange={(e) => this.handleFirstData(e)}
            value={first_date}
          />
        </div>
        <div className="d-flex justify-content-center my-3  ">
          <input
            className="form-control w-25"
            placeholder="enter hour"
            onChange={(e) => this.handleDuration(e)}
            value={duration}
          />
        </div>
        {duration>0&&<div>
          <DateTimePicker
            onChange={(e) => this.handleSecondData(e)}
            value={second_date}
          />
        </div>}
      </div>
    );
  }
}
export default CustomDate;
