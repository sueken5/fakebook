import { View } from "react-native";
import * as React from "react";
import { PostHeader } from "./PostHeader";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";

interface Props {
  id: string;
  text: string;
  goodCount: number;
  shareCount: number;
  commentCount: number;
  createdAt: string;
}

export const Post = (props: Props) => (
  <View style={{ backgroundColor: "white" }}>
    <PostHeader />
    <PostBody text={props.text} />
    <PostFooter goodCount={props.goodCount} shareCount={props.shareCount} />
  </View>
);
