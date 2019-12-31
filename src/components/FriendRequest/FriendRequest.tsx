import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { IUser } from "../../types/User";
import { CircleImage } from "../Image/CircleImage";

interface Props {
  user: IUser;
  commonFriends: IUser[];
  onPress: () => void;
}

export const FriendRequest = (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ backgroundColor: "white", flexDirection: "row" }}>
      <CircleImage
        source={require("../../../assets/kawaii_neco.jpg")}
        width={100}
        height={100}
      />
      <View>
        <Text>{props.user.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <CircleImage
            source={require("../../../assets/kawaii_neco.jpg")}
            width={20}
            height={20}
          />
          <Text>共通の友達{props.commonFriends.length}人</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title={"友達になる"}
            onPress={() => Alert.alert("友達になった")}
          />
          <Button title={"削除"} onPress={() => Alert.alert("削除しました")} />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
