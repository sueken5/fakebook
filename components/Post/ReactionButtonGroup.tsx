import { Text, View } from "react-native";
import * as React from "react";
import { ReactionButton } from "./ReactionButton";
import { LikeIcon } from "../Icon/LikeIcon";
import { CommentIcon } from "../Icon/CommentIcon";

export const ReactionButtonGroup = () => (
  <View
    style={{
      flexDirection: "row",
      padding: 5,
      justifyContent: "center",
      width: "100%"
    }}
  >
    <ReactionButton icon={<LikeIcon />}>いいね！</ReactionButton>
    <ReactionButton icon={<CommentIcon />}>コメントする</ReactionButton>
    <ReactionButton icon={<LikeIcon />}>いいね！</ReactionButton>
  </View>
);
