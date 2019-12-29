import { TextInput, View } from "react-native";
import * as React from "react";

export const CommentInput = () => (
  <TextInput
    value={"今何してる？"}
    style={{
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 20,
      flex: 1,
      paddingHorizontal: 5
    }}
  />
);
