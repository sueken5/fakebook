import { View } from "react-native";
import * as React from "react";
import { ReactionButtonGroup } from "./ReactionButtonGroup";
import { Reactions } from "./Reactions";

interface Props {
  goodCount: number;
  shareCount: number;
  reactionsOnPress: () => void;
}

export const ActivityFooter = (props: Props) => (
  <View style={{ padding: 10 }}>
    <Reactions goodCount={props.goodCount} onPress={props.reactionsOnPress} />
    <ReactionButtonGroup />
  </View>
);
