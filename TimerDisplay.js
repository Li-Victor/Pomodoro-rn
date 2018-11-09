import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 40
  }
});

// displays in minute:second
function display(timer) {
  const minutes = Math.floor(timer / 60000);
  const seconds = timer % 60000 / 1000;

  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
  return `${minutes}:${displaySeconds}`;
}
const TimerDisplay = ({ timer, isBreak }) => (
  <React.Fragment>
    { isBreak ? (<Text style={styles.text}>Break: {display(timer)}</Text>) : (<Text style={styles.text}>Work: {display(timer)}</Text>) }
  </React.Fragment>
);
  
TimerDisplay.propTypes = {
  timer: PropTypes.number.isRequired,
  isBreak: PropTypes.bool.isRequired
};

export default TimerDisplay;
