import React from 'react';
import { View, Text, Vibration } from 'react-native';
import PropTypes from 'prop-types';

const DURATION = 10000;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const { sessionLength, breakLength } = this.props;
    
    this.state = {
      sessionLength, 
      breakLength
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  decrementClock = () => {
    if (this.state.sessionLength === 0) {
      Vibration.vibrate(DURATION);
      this.setState({ sessionLength: 5 });
    } else {
      this.setState((prevState) => ({ sessionLength: prevState.sessionLength - 1 }));
    }
  }

  render() {
    const { sessionLength, breakLength } = this.state;
    return (
      <View>
        <Text>Session: {sessionLength}</Text>
      </View>
    );
  }
}

Timer.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  breakLength: PropTypes.number.isRequired
};

export default Timer;
