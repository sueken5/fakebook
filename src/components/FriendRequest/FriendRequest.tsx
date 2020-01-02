import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
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
    <View style={styles.container}>
      <Image style={styles.mainIcon} source={{ uri: props.user.iconURL }} />
      <View style={{ padding: 5 }}>
        <View style={{ marginBottom: 5 }}>
          <Text style={{ fontSize: 20 }}>{props.user.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 5 }}>
            <Image
              style={styles.miniIcon}
              source={{ uri: props.commonFriends[0].iconURL }}
            />
          </View>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
    alignItems: "center"
  },
  mainIcon: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  miniIcon: {
    height: 20,
    width: 20,
    borderRadius: 10
  }
});
