import * as React from "react";
import { Button, View, Text, FlatList, Alert } from "react-native";
import { Notice } from "../components/Notice/Notice";
import { getNotices } from "../mock";
import { ScreenHeader } from "../components/Screen/ScreenHeader";

export function NoticeListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        ListHeaderComponent={<ScreenHeader name={"お知らせ"} buttons={[]} />}
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
