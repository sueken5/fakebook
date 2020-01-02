import * as React from "react";
import { Button, View, Text, Image, Alert, FlatList } from "react-native";
import { GroupScreenHeader } from "../components/Group/GroupScreenHeader";
import { getActivities, getGroup } from "../mock";
import { Activity } from "../components/Activity/Activity";

export function GroupScreen({ navigation }) {
  const group = getGroup();
  return (
    <View style={{ backgroundColor: "gray" }}>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginBottom: 10 }}>
            <GroupScreenHeader group={group} />
          </View>
        }
        data={getActivities()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Activity
              id={item.id}
              text={item.text}
              goodCount={item.goodCount}
              shareCount={item.shareCount}
              commentCount={item.comments.length}
              createdAt={item.createdAt}
              user={item.user}
              headerOnPress={() => navigation.navigate("Comments")}
              bodyOnPress={() =>
                navigation.navigate("Activity", { id: "hello" })
              }
              reactionsOnPress={() => navigation.navigate("Reactions")}
            />
          </View>
        )}
      />
    </View>
  );
}
