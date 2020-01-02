import { Image, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { MoreIcon } from "../Icon/MoreIcon";
import { INotice } from "../../types/Notice";

interface Props {
  notice: INotice;
  onPress: () => void;
}

export const Notice = (props: Props) => (
  <TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center"
      }}
    >
      <View style={{ padding: 10 }}>
        <Image
          style={{ height: 70, width: 70, borderRadius: 35 }}
          source={{ uri: props.notice.user.iconURL }}
        />
      </View>
      <View
        style={{
          flex: 5,
          padding: 10
        }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{props.notice.text}</Text>
        </View>
        <View>
          <Text>{props.notice.createdAt}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <MoreIcon />
      </View>
    </View>
  </TouchableOpacity>
);
