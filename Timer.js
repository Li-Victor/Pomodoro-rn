import React from 'react';
import { View, Text, Vibration } from 'react-native';
import PropTypes from 'prop-types';


const Timer = ({ timer, isBreak }) => (
  <View>
    { isBreak ? (<Text>Break: {timer}</Text>) : (<Text>Work: {timer}</Text>) }
  </View>
);
  
Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  isBreak: PropTypes.bool.isRequired
};

export default Timer;
