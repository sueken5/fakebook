import { Image, ImageSourcePropType, Text, View } from "react-native";
import * as React from "react";

interface Props {
  source: ImageSourcePropType;
  description: string;
  isActive?: boolean;
}

export const IconButton = (props: Props) => (
  <View style={{ width: 100, alignItems: "center" }}>
    <View style={{ padding: 10 }}>
      <View
        style={{
          backgroundColor: props.isActive ? "#4169e1" : "d3d3d3",
          borderRadius: 25,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image style={{ height: 20, width: 20 }} source={props.source} />
      </View>
    </View>
    <View>
      <Text
        style={{
          textAlign: "center",
          color: props.isActive ? "#4169e1" : "#696969"
        }}
      >
        {props.description}
      </Text>
    </View>
  </View>
);
