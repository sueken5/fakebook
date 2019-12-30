import { FlatList, View } from "react-native";
import * as React from "react";
import { Post } from "./Post";

interface Props {
  posts: Array<{
    id: string;
    text: string;
    goodCount: number;
    shareCount: number;
    commentCount: number;
    createdAt: string;
  }>;
}

export const PostList = (props: Props) => (
  <View>
    <FlatList
      data={props.posts}
      renderItem={({ item }) => (
        <Post
          id={item.id}
          text={item.text}
          goodCount={item.goodCount}
          shareCount={item.shareCount}
          commentCount={item.commentCount}
          createdAt={item.createdAt}
        />
      )}
    />
  </View>
);
