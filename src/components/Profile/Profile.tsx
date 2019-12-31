import { Text, View } from "react-native";
import * as React from "react";
import { IconButtonGroup } from "./IconButtonGroup";
import { CareerList } from "./CareerList";
import { ProfileHeader } from "./ProfileHeader";
import { IProfile } from "../../types/Profile";

interface Props {
  profile: IProfile;
}

export const Profile = (props: Props) => (
  <View style={{ backgroundColor: "#fff" }}>
    <ProfileHeader
      iconImageURL={props.profile.user.iconURL}
      backgroundImageURL={props.profile.backgroundImageURL}
    />
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50 }}>{props.profile.user.name}</Text>
      <Text>{props.profile.selfDescription}</Text>
    </View>
    <IconButtonGroup />
    <CareerList />
  </View>
);
