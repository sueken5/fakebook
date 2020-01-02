import * as React from "react";
import { Button, View, Text, Alert, FlatList } from "react-native";
import { SearchIcon } from "../Icon/SearchIcon";

interface Props {
  name: string;
  buttons: {
    key: string;
    onPress: () => void;
  }[];
}

export const ScreenHeader = (props: Props) => {
  return (
    <View style={{ backgroundColor: "#ffffff", padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 30 }}>{props.name}</Text>
        <View
          style={{
            backgroundColor: "#d3d3d3",
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <SearchIcon />
        </View>
      </View>
      <FlatList
        horizontal
        data={props.buttons}
        renderItem={({ item }) => (
          <Button title={item.key} onPress={item.onPress} />
        )}
      />
    </View>
  );
};
