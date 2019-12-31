import { Text, TouchableOpacity, View } from "react-native";
import * as React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

export const ActivityBody = (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ padding: 5 }}>
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
