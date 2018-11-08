import React from 'react';
import { View, Text, Button, Vibration } from 'react-native';
import PropTypes from 'prop-types';

import TimerDisplay from './TimerDisplay';

const DURATION = 10000;
const breakLength = 5;
const workLength = 10;

class Timer extends React.Component {
  state = {
    stopped: false,
    breakLength,
    workLength,
    timer: workLength,
    isBreak: false
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnMount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timerIntervalID = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timerIntervalID);
  }

  onPressButton = () => {
    if (this.state.stopped) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
    this.setState((prevState) => ({ stopped: !prevState.stopped }));
  }

  decrementClock = () => {
    const { workLength, breakLength, timer } = this.state;
    if (timer === 0) {
      this.setState((prevState) => ({ 
        timer: prevState.isBreak ? workLength : breakLength,
        isBreak: !prevState.isBreak 
      }));
    } else {
      if (timer === 1) Vibration.vibrate(DURATION);
      this.setState((prevState) => ({ timer: prevState.timer - 1 }));
    }
  }

  onPressReset = () => {
    const { workLength } = this.state;
    // stop timer and then start timer
    this.stopTimer();
    this.setState(() => ({ stopped: false, timer: workLength, isBreak: false }), () => {
      this.startTimer();
    })
  }

  render() {
    const { stopped, timer, isBreak } = this.state;
    return (
      <React.Fragment>
        <Button title={stopped ? 'Start' : 'Stop'} onPress={this.onPressButton} />
        <Button title="Reset" onPress={this.onPressReset} />
        <TimerDisplay timer={timer} isBreak={isBreak} />
      </React.Fragment>
    );
  }
}

export default Timer;
