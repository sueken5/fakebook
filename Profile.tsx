import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Page } from "./components/Profile/Page";

export const Profile = () => (
  <View style={[styles.scene, { backgroundColor: "#fff" }]}>
    <Page />
  </View>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
