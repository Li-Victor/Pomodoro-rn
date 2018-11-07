import React from 'react';
import { StyleSheet, Button, View, Vibration } from 'react-native';
import Timer from './Timer';

export default class App extends React.Component {

  onPress = () => {
    const DURATION = 10000
    Vibration.vibrate(DURATION);
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer breakLength={5} sessionLength={5} />
        <Button onPress={this.onPress} title="Press iii" />
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
