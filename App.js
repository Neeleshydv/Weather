// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherApp from './WeatherApp';

const App = () => {
  return (
    <View style={styles.container}>
      <WeatherApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
