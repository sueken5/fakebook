import {View} from "react-native";
import * as React from "react";
import {SpanIcon} from "./SpanIcon";
import {Icon} from "./Icon";

export const Icons = () => (
    <View style={{flexDirection:"row", alignItems:"center"}}>
        <SpanIcon source={require("../../assets/icons/plus.png")} description={"ストーリーに追加"}/>
        <Icon source={require("../../assets/icons/eye.png")} description={"プレビュー"}/>
        <Icon source={require("../../assets/icons/edit.png")} description={"プロフィールを編集"}/>
        <Icon source={require("../../assets/icons/more.png")} description={"その他"}/>
    </View>
);
