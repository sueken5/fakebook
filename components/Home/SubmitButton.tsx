import { Image, Text, TextInput, View } from "react-native";
import * as React from "react";

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const SubmitButton = (props: Props) => (
  <View style={{ padding: 5, flexDirection: "row", justifyContent: "center" }}>
    <View style={{ padding: 5 }}>{props.icon}</View>
    <View style={{ padding: 5 }}>
      <Text>{props.children}</Text>
    </View>
  </View>
);
