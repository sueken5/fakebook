import { View } from "react-native";
import * as React from "react";
import { PostHeader } from "./PostHeader";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";

export const Post = () => (
  <View style={{ backgroundColor: "white" }}>
    <PostHeader />
    <PostBody text={"hello"} />
    <PostFooter goodCount={30} shareCount={1} />
  </View>
);
