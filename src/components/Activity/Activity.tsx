import { View } from "react-native";
import * as React from "react";
import { ActivityFooter } from "./ActivityFooter";
import { ActivityBody } from "./ActivityBody";
import { ActivityHeader } from "./ActivityHeader";
import { IUser } from "../../types/User";

interface Props {
  id: string;
  text: string;
  goodCount: number;
  shareCount: number;
  commentCount: number;
  createdAt: number;
  user: IUser;
}

export const Activity = (props: Props) => (
  <View style={{ backgroundColor: "white" }}>
    <ActivityHeader user={props.user} createdAt={props.createdAt} />
    <ActivityBody text={props.text} />
    <ActivityFooter goodCount={props.goodCount} shareCount={props.shareCount} />
  </View>
);
