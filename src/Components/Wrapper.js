import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

const Wrapper = ({style, children}) => {
  return (
    <SafeAreaView style={[styles.container, {...style}]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
});
export default Wrapper;
