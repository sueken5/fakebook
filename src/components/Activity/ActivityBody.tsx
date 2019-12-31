import { Text, View } from "react-native";
import * as React from "react";

interface Props {
  text: string;
}

export const ActivityBody = (props: Props) => (
  <View style={{ padding: 5 }}>
    <Text>{props.text}</Text>
  </View>
);
