import { Text, View } from "react-native";
import * as React from "react";
import { LikeIcon } from "../Icon/LikeIcon";
import { HeartIcon } from "../Icon/HeartIcon";
import { ReactionButtonGroup } from "./ReactionButtonGroup";

interface Props {
  goodCount: number;
  shareCount: number;
}

export const PostFooter = (props: Props) => (
  <View style={{ padding: 10 }}>
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "gray",
        padding: 5
      }}
    >
      <LikeIcon />
      <HeartIcon />
      <Text>キャワワな猫さん{props.goodCount}匹</Text>
      <Text>シェア{props.shareCount}件</Text>
    </View>
    <ReactionButtonGroup />
  </View>
);
