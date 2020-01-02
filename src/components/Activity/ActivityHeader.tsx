import { Image, Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { CircleImage } from "../Image/CircleImage";
import { MenuIcon } from "../Icon/MenuIcon";
import { WorldIcon } from "../Icon/WorldIcon";
import { IUser } from "../../types/User";

interface Props {
  user: IUser;
  createdAt: number;
}

export const ActivityHeader = (props: Props) => (
  <View style={{ flexDirection: "row", padding: 10 }}>
    <Image style={styles.icon} source={{ uri: props.user.iconURL }} />
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text style={{ fontSize: 20, marginBottom: 5 }}>{props.user.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>{props.createdAt}・</Text>
        <WorldIcon />
      </View>
    </View>
    <MenuIcon />
  </View>
);

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
});
