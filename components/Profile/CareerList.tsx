import {View} from "react-native";
import * as React from "react";
import {Career} from "./Career";

export const CareerList = () => (
    <View style={{padding: 10}}>
        <Career source={require("../../assets/icons/user.png")} description={"猫立猫猫大学マタタビ研究科"}/>
        <Career source={require("../../assets/icons/user.png")} description={"末永宅で飼育されていました"}/>
        <Career source={require("../../assets/icons/user.png")} description={"末永宅リビング在住"}/>
        <Career source={require("../../assets/icons/user.png")} description={"旧末永宅ソファ出身"}/>
        <Career source={require("../../assets/icons/user.png")} description={"2019年12月に参加しました"}/>
        <Career source={require("../../assets/icons/more.png")} description={"基本データをみる"}/>
    </View>
);
