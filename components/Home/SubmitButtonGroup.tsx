import { View } from "react-native";
import * as React from "react";

interface Props {
  children: React.ReactNode[];
}

export const SubmitButtonGroup = (props: Props) => (
  <View
    style={{
      borderColor: "gray",
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "center",
      width: "100%"
    }}
  >
    {props.children.map((child, index) => {
      if (index === props.children.length - 1) {
        return <View style={{ flex: 1 }}>{child}</View>;
      }

      return (
        <View style={{ borderRightWidth: 1, borderColor: "gray", flex: 1 }}>
          {child}
        </View>
      );
    })}
  </View>
);
