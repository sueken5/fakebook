import { Image, View, StyleSheet, Button, Alert } from "react-native";
import * as React from "react";
import { IUser } from "../../types/User";

interface Props {
  user: IUser;
}

export const ActivityForm = (props: Props) => (
  <View style={{ backgroundColor: "white" }}>
    <View style={{ flexDirection: "row", padding: 10 }}>
      <Image style={styles.icon} source={{ uri: props.user.iconURL }} />
      <Button title={"今何してる？"} onPress={() => Alert.alert("hello")} />
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button title={"ライブ動画"} onPress={() => Alert.alert("hello")} />
      <Button title={"写真"} onPress={() => Alert.alert("hello")} />
      <Button title={"チェックイン"} onPress={() => Alert.alert("hello")} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});
