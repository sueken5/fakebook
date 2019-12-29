import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from "./Tab";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
        <Tab />
      </SafeAreaProvider>
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
