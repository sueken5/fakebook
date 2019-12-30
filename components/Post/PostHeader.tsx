import { Text, View } from "react-native";
import * as React from "react";
import { CircleImage } from "../Image/CircleImage";
import { MenuIcon } from "../Icon/MenuIcon";
import { WorldIcon } from "../Icon/WorldIcon";

interface Props {
  name: string;
  createdAt: string;
}

export const PostHeader = (props: Props) => (
  <View style={{ flexDirection: "row", padding: 10 }}>
    <CircleImage
      source={require("../../assets/kawaii_neco.jpg")}
      width={50}
      height={50}
    />
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text style={{ fontSize: 20, marginBottom: 5 }}>{props.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>{props.createdAt}・</Text>
        <WorldIcon />
      </View>
    </View>
    <MenuIcon />
  </View>
);
