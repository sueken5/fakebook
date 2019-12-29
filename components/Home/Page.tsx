import { ScrollView, View } from "react-native";
import * as React from "react";
import { Form } from "./Form";
import { Stories } from "./Stories";
import { Post } from "../Post/Post";

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
        <Post />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Post />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Post />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Post />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Post />
      </View>
    </View>
  </ScrollView>
);
