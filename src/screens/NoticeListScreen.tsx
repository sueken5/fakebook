import * as React from "react";
import { Button, View, Text, FlatList } from "react-native";
import { Notice } from "../components/Notice/Notice";
import { getNotices } from "../mock";

export function NoticeListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={getNotices()}
        renderItem={({ item }) => (
          <Notice
            notice={item}
            onPress={() => navigation.navigate("Activity", { id: "1" })}
          />
        )}
      />
    </View>
  );
}
