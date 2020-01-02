import * as React from "react";
import { Button, View, Text, FlatList, Alert } from "react-native";
import { IUser } from "../types/User";
import { FriendRequest } from "../components/FriendRequest/FriendRequest";
import { getUser, getUsers } from "../mock";
import { ScreenHeader } from "../components/Screen/ScreenHeader";

export function FriendListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <ScreenHeader
            name={"友達"}
            buttons={[
              {
                key: "リクエスト",
                onPress: () => Alert.alert("参加")
              },
              {
                key: "全ての友達",
                onPress: () => Alert.alert("発見")
              }
            ]}
          />
        }
        data={getUsers()}
        renderItem={({ item }) => (
          <FriendRequest
            user={item}
            commonFriends={getUsers()}
            onPress={() => navigation.navigate("Profile", { id: item })}
          />
        )}
      />
    </View>
  );
}
