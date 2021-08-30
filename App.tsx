import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TopBar from './src/components/TopBar';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <TopBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
