import { View } from "react-native";
import * as React from "react";
import { IconButton } from "./IconButton";

export const IconButtonGroup = () => (
  <View style={{ flexDirection: "row" }}>
    <IconButton
      source={require("../../assets/icons/plus.png")}
      description={"ストーリーに追加"}
      isActive
    />
    <IconButton
      source={require("../../assets/icons/eye.png")}
      description={"プレビュー"}
    />
    <IconButton
      source={require("../../assets/icons/edit.png")}
      description={"プロフィールを編集"}
    />
    <IconButton
      source={require("../../assets/icons/more.png")}
      description={"その他"}
    />
  </View>
);
