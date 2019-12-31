import { Alert, TouchableOpacity, View } from "react-native";
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
  headerOnPress: () => void;
  bodyOnPress: () => void;
  reactionsOnPress: () => void;
}

export const Activity = (props: Props) => (
  <View style={{ backgroundColor: "white" }}>
    <TouchableOpacity onPress={props.headerOnPress}>
      <ActivityHeader user={props.user} createdAt={props.createdAt} />
    </TouchableOpacity>
    <ActivityBody text={props.text} onPress={props.bodyOnPress} />
    <ActivityFooter
      goodCount={props.goodCount}
      shareCount={props.shareCount}
      reactionsOnPress={props.reactionsOnPress}
    />
  </View>
);
