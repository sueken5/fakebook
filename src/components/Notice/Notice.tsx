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
    <View style={{ flexDirection: "row", backgroundColor: "#fff" }}>
      <View style={{ padding: 10 }}>
        <Image
          style={{ height: 90, width: 90, borderRadius: 50 }}
          source={{ uri: props.notice.user.iconURL }}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: "space-between",
          paddingHorizontal: 5,
          paddingVertical: 10
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>{props.notice.text}</Text>
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
