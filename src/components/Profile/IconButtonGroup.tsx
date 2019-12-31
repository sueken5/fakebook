import { View } from "react-native";
import * as React from "react";
import { IconButton } from "./IconButton";
import { PlusIcon } from "../Icon/PlusIcon";
import { EyeIcon } from "../Icon/EyeIcon";
import { EditIcon } from "../Icon/EditIcon";
import { MoreIcon } from "../Icon/MoreIcon";

export const IconButtonGroup = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <IconButton icon={<PlusIcon />} description={"ストーリーに追加"} isActive />
    <IconButton icon={<EyeIcon />} description={"プレビュー"} />
    <IconButton icon={<EditIcon />} description={"プロフィールを編集"} />
    <IconButton icon={<MoreIcon />} description={"その他"} />
  </View>
);
