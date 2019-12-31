import { Text, TouchableOpacity, View } from "react-native";
import * as React from "react";

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ReactionButton = (props: Props) => (
  <TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {props.icon}
      <Text style={{ marginLeft: 5 }}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);
