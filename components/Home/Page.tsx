import { ScrollView, View } from "react-native";
import * as React from "react";
import { Form } from "./Form";
import { Stories } from "./Stories";
import { Post } from "../Post/Post";
import { PostList } from "../Post/PostList";

export const Page = () => (
  <ScrollView>
    <View style={{ backgroundColor: "gray" }}>
      <View style={{ marginBottom: 10 }}>
        <Form />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Stories />
      </View>
      <View style={{ marginBottom: 10 }}>
        <PostList posts={} />
      </View>
    </View>
  </ScrollView>
);

const pageMockData = {
  posts: [
    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    },

    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    },

    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    },

    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    },

    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    },

    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    },

    {
      id: "p-111",
      user: {
        id: "u-111",
        name: "猫太郎",
        iconURL:
          "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
      },
      text: "hello world",
      createdAt: 1577675589
    }
  ]
};
