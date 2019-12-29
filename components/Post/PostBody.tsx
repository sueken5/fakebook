import { Text, View } from "react-native";
import * as React from "react";

interface Props {
  text: string;
}

export const PostBody = (props: Props) => (
  <View style={{ padding: 5 }}>
    <Text>{props.text}</Text>
  </View>
);
