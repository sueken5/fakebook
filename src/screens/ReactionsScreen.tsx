import * as React from "react";
import { Button, View, Text } from "react-native";

export function ReactionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Activity {navigation.getParam("name", "guest")}!</Text>
      <Button title="Go to Main" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
