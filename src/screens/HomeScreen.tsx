import * as React from "react";
import { Button, View, Text } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home {navigation.getParam("name", "guest")}!</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate("Activity")}
      />
    </View>
  );
}
