import React from 'react';
import { View, Text, Vibration } from 'react-native';
import PropTypes from 'prop-types';

const DURATION = 10000;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const { workLength } = this.props;
    
    this.state = {
      timer: workLength,
      isBreak: false
    };
  }

  componentDidMount() {
    this.timerIntervalID = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timerIntervalID);
  }

  decrementClock = () => {
    const { workLength, breakLength } = this.props;
    const { timer } = this.state;
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

  render() {
    const { timer, isBreak } = this.state;
    return (
      <View>
        { isBreak ? (<Text>Break: {timer}</Text>) : (<Text>Work: {timer}</Text>) }
      </View>
    );
  }
}

Timer.propTypes = {
  workLength: PropTypes.number.isRequired,
  breakLength: PropTypes.number.isRequired
};

export default Timer;
