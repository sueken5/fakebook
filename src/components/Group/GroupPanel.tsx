import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { IGroup } from "../../types/Group";

interface Props {
  group: IGroup;
  onPress: () => void;
}

export const GroupPanel = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          width: 300,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 10
        }}
      >
        <Image
          style={{
            height: 200,
            width: 300,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}
          source={{
            uri: props.group.imageURL
          }}
        />
        <Text style={{ fontSize: 20 }}>{props.group.name}</Text>
        <Text>メンバー{props.group.members.length}人</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button title={"参加する"} onPress={() => Alert.alert("参加する")}>
            参加する
          </Button>
          <Button title={"表示"} onPress={() => Alert.alert("参加する")}>
            表示
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};
