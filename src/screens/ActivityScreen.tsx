import * as React from "react";
import { Alert, View } from "react-native";
import { Activity } from "../components/Activity/Activity";
import { IActivity } from "../types/Activity";

export function ActivityScreen({ navigation }) {
  const id = navigation.getParam("id", "a-111");
  const activity = getActivity(id);

  return (
    <View>
      <Activity
        id={activity.id}
        user={activity.user}
        text={activity.text}
        goodCount={activity.goodCount}
        shareCount={activity.shareCount}
        commentCount={activity.comments.length}
        createdAt={activity.createdAt}
        headerOnPress={() => Alert.alert("header pressed")}
        bodyOnPress={() => Alert.alert("body pressed")}
        reactionsOnPress={() => Alert.alert("reactions pressed")}
      />
    </View>
  );
}

function getActivity(id: string): IActivity {
  return {
    id: "a-112",
    user: {
      id: "u-aaa",
      name: "kengo",
      iconURL:
        "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
    },
    text: "hello world",
    createdAt: Date.now(),
    goodCount: 100,
    shareCount: 10,
    comments: [
      {
        id: "c-111",
        user: {
          id: "u-aaa",
          name: "kengo",
          iconURL:
            "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
        },
        text: "hello kengo",
        createdAt: Date.now()
      }
    ]
  };
}
