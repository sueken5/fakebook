import { Text, View } from "react-native";
import * as React from "react";

interface Props {
  description: string;
  icon: React.ReactNode;
}

export const Career = (props: Props) => (
  <View style={{ flexDirection: "row", padding: 5 }}>
    {props.icon}
    <View style={{ paddingHorizontal: 5 }}>
      <Text style={{ fontSize: 20 }}>{props.description}</Text>
    </View>
  </View>
);
