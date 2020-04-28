import React, { Component } from "react";
import './App.css';

class Timer extends Component {
  state = {
    time: 0,
    hour: 0,
    min: 0,
    sec: 0,
  };

  timeConvert = () => {
    var num = this.state.time;
    this.setState({ hour: Math.floor(num / 3600) });
    this.setState({ min: Math.floor((num % 3600) / 60) });
    this.setState({ sec: num % 60 });
  };
  resertTime = () => {
    var num = this.state.time;
    this.setState({ hour: 0, min: 0, sec: 0 })
  }
  render() {
    return (
      <div className="timer">


        <center> <img className="fondCard" src="clock1.jpg" alt="clock" /> </center>
        <h1>Time Conversion Calculator</h1>

        <center>
          <input
            type="text"
            id="time"
            placeholder="Value to convert"
            onChange={(e) => this.setState({ time: e.target.value })}
          />
        </center>
        <p>
          <button className="boutonConvert" type="button" onClick={this.timeConvert}>
            Convert
        </button>

          <button className="boutonReset" type="button" onClick={this.resertTime}>
            Reset
        </button>
        </p>

        <span className="conversion">
          <h6>Hours: {this.state.hour}</h6>
          <h6>Minutes: {this.state.min}</h6>
          <h6>Seconds: {this.state.sec}</h6>

        </span>


      </div>
    );
  }
}
export default Timer;



