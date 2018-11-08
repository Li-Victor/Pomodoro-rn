import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';


const TimerDisplay = ({ timer, isBreak }) => (
  <React.Fragment>
    { isBreak ? (<Text>Break: {timer}</Text>) : (<Text>Work: {timer}</Text>) }
  </React.Fragment>
);
  
TimerDisplay.propTypes = {
  timer: PropTypes.number.isRequired,
  isBreak: PropTypes.bool.isRequired
};

export default TimerDisplay;
