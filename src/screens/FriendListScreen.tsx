import * as React from "react";
import { Button, View, Text, FlatList } from "react-native";
import { IUser } from "../types/User";
import { FriendRequest } from "../components/FriendRequest/FriendRequest";

export function FriendListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={[0, 0, 0, 0, 0, 0, 0]}
        renderItem={({ item }) => (
          <FriendRequest
            user={getUser()}
            commonFriends={getCommonUsers()}
            onPress={() => navigation.navigate("Profile", { id: item })}
          />
        )}
      />
    </View>
  );
}

function getUser(): IUser {
  return {
    id: "u-aaa",
    name: "kengo",
    iconURL:
      "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
  };
}

function getCommonUsers(): IUser[] {
  return [getUser()];
}
