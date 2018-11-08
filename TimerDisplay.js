import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

// displays in minute:second
function display(timer) {
  const minutes = Math.floor(timer / 60000);
  const seconds = timer % 60000 / 1000;

  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
  return `${minutes}:${displaySeconds}`;
}
const TimerDisplay = ({ timer, isBreak }) => (
  <React.Fragment>
    { isBreak ? (<Text>Break: {display(timer)}</Text>) : (<Text>Work: {display(timer)}</Text>) }
  </React.Fragment>
);
  
TimerDisplay.propTypes = {
  timer: PropTypes.number.isRequired,
  isBreak: PropTypes.bool.isRequired
};

export default TimerDisplay;
