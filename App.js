import React from 'react';
import { StyleSheet, Button, View, Vibration } from 'react-native';
import Timer from './Timer';

const DURATION = 10000;

export default class App extends React.Component {
  state = {
    stop: false,
    breakLength: 5,
    workLength: 10,
    timer: 10,
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

  onPress = () => {
    if (this.state.stop) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
    this.setState((prevState) => ({ stop: !prevState.stop }));
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

  render() {
    const { stop, timer, isBreak } = this.state;
    return (
      <View style={styles.container}>
        <Button title={stop ? 'Start' : 'Stop'} onPress={this.onPress} />
        <Timer timer={timer} isBreak={isBreak} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
