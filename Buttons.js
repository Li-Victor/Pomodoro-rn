import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

const Buttons = ({ onPressButton, onPressReset, stopped }) => (
  <View style={styles.container}>
    <Button title={stopped ? 'Start' : 'Stop'} onPress={onPressButton} />
    <Button title="Reset" onPress={onPressReset} />
  </View>
);

Buttons.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  onPressReset: PropTypes.func.isRequired,
  stopped: PropTypes.bool.isRequired
}


export default Buttons;
