import * as React from "react";
import { View, FlatList } from "react-native";
import { Activity } from "../components/Activity/Activity";
import { IActivity } from "../types/Activity";

export function HomeScreen({ navigation }) {
  const activities = getActivities(["id"]);

  return (
    <View style={{ backgroundColor: "gray" }}>
      {/*<Button*/}
      {/*  title="Go to Main"*/}
      {/*  onPress={() => navigation.navigate("Activity")}*/}
      {/*/>*/}
      <FlatList
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

function getActivities(ids: string[]): IActivity[] {
  return [
    {
      id: "a-111",
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
    },
    {
      id: "a-111",
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
    },
    {
      id: "a-111",
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
    },
    {
      id: "a-111",
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
    },
    {
      id: "a-111",
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
    }
  ];
}
