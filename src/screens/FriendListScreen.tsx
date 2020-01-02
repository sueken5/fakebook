import * as React from "react";
import { Button, View, Text, FlatList } from "react-native";
import { IUser } from "../types/User";
import { FriendRequest } from "../components/FriendRequest/FriendRequest";
import { getUser, getUsers } from "../mock";

export function FriendListScreen({ navigation }) {
  return (
    <View>
      <FlatList
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
