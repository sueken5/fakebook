import * as React from "react";
import { View, FlatList } from "react-native";
import { Activity } from "../components/Activity/Activity";
import { getActivities, getUser } from "../mock";
import { ActivityForm } from "../components/Activity/ActivityForm";

export function HomeScreen({ navigation }) {
  const activities = getActivities();

  return (
    <View style={{ backgroundColor: "gray" }}>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginBottom: 10 }}>
            <ActivityForm user={getUser()} />
          </View>
        }
        data={activities}
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
                navigation.navigate("Activity", { id: item.id })
              }
              reactionsOnPress={() => navigation.navigate("Reactions")}
            />
          </View>
        )}
      />
    </View>
  );
}
