import { Text, View } from "react-native";
import * as React from "react";
import { CircleImage } from "../Image/CircleImage";
import { MenuIcon } from "../Icon/MenuIcon";
import { WorldIcon } from "../Icon/WorldIcon";

interface Props {
  name: string;
  createdAt: string;
}

export const PostHeader = () => (
  <View style={{ flexDirection: "row", padding: 10 }}>
    <CircleImage
      source={require("../../assets/kawaii_neco.jpg")}
      width={50}
      height={50}
    />
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text style={{ fontSize: 20, marginBottom: 5 }}>
        可愛い可愛い猫ちゃん
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text>8時間前・</Text>
        <WorldIcon />
      </View>
    </View>
    <MenuIcon />
  </View>
);
