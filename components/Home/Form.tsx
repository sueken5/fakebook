import { Image, Text, TextInput, View } from "react-native";
import * as React from "react";
import { SubmitButton } from "./SubmitButton";
import { VideoIcon } from "./VideoIcon";
import { SubmitButtonGroup } from "./SubmitButtonGroup";
import { CircleImage } from "../Image/CircleImage";
import { CommentInput } from "./CommentInput";

export const Form = () => (
  <View style={{ backgroundColor: "#fff" }}>
    <View style={{ flexDirection: "row", padding: 10 }}>
      <View style={{ padding: 5 }}>
        <CircleImage
          height={30}
          width={30}
          source={require("../../assets/kawaii_neco.jpg")}
        />
      </View>
      <View style={{ padding: 5, flex: 1 }}>
        <CommentInput />
      </View>
    </View>

    <SubmitButtonGroup>
      <SubmitButton icon={<VideoIcon />}>ライブ動画</SubmitButton>
      <SubmitButton icon={<VideoIcon />}>ライブ動画</SubmitButton>
      <SubmitButton icon={<VideoIcon />}>ライブ動画</SubmitButton>
    </SubmitButtonGroup>
  </View>
);
