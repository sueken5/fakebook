import { View } from "react-native";
import * as React from "react";
import { Career } from "./Career";
import { UserIcon } from "../Icon/UserIcon";

export const CareerList = () => (
  <View style={{ padding: 10 }}>
    <Career icon={<UserIcon />} description={"猫立猫猫大学マタタビ研究科"} />
    <Career icon={<UserIcon />} description={"末永宅で飼育されていました"} />
    <Career icon={<UserIcon />} description={"末永宅リビング在住"} />
    <Career icon={<UserIcon />} description={"旧末永宅ソファ出身"} />
    <Career icon={<UserIcon />} description={"2019年12月に参加しました"} />
    <Career icon={<UserIcon />} description={"基本データをみる"} />
  </View>
);
