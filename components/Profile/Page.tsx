import { Text, View } from "react-native";
import * as React from "react";
import { IconButtonGroup } from "./IconButtonGroup";
import { CareerList } from "./CareerList";
import { ProfileHeader } from "./ProfileHeader";

export const Page = () => (
  <View style={{ backgroundColor: "#fff" }}>
    <ProfileHeader />
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50 }}>猫です</Text>
      <Text>nyaaaaaaaaaaan</Text>
    </View>
    <IconButtonGroup />
    <CareerList />
  </View>
);
