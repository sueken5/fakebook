import * as React from "react";
import { Button, View, Text, FlatList } from "react-native";
import { INotice } from "../types/Notice";
import { Notice } from "../components/Notice/Notice";

export function NoticeListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={[0, 0, 0, 0, 0, 0, 0, 0]}
        renderItem={() => (
          <Notice
            notice={getNotice()}
            onPress={() => navigation.navigate("Activity", { id: "1" })}
          />
        )}
      />
    </View>
  );
}

function getNotice(): INotice {
  return {
    id: "add-",
    user: {
      id: "u-aa",
      name: "kengo",
      iconURL:
        "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
    },
    text: "知り合いかも",
    createdAt: Date.now()
  };
}
