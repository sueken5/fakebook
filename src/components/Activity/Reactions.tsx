import { Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { LikeIcon } from "../Icon/LikeIcon";

interface Props {
  goodCount: number;
  onPress: () => void;
}

export const Reactions = (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        padding: 5
      }}
    >
      <LikeIcon />
      <Text>{props.goodCount}</Text>
    </View>
  </TouchableOpacity>
);
