import { Image, View } from "react-native";
import * as React from "react";

export const ProfileHeader = () => (
  <View>
    <Image
      style={{ height: 200 }}
      source={require("../../assets/back_sakura.jpg")}
    />
    <Image
      style={{
        width: 150,
        height: 150,
        borderRadius: 75,
        borderColor: "white",
        borderWidth: 3,
        alignSelf: "center",
        marginTop: -75
      }}
      source={require("../../assets/kawaii_neco.jpg")}
    />
  </View>
);