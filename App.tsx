import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabViewExample from "./Tab";

export default function App() {
  return (
      <TabViewExample />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red"
  }
});
