import * as React from "react";
import { Button, View, Text, FlatList, ScrollView } from "react-native";
import { IProfile } from "../types/Profile";
import { Profile } from "../components/Profile/Profile";
import { Activity } from "../components/Activity/Activity";
import { IActivity } from "../types/Activity";

export function ProfileScreen({ navigation }) {
  const activities = getActivities(["aa"]);
  return (
    <View style={{ backgroundColor: "gray" }}>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Profile profile={getProfile()} />
        </View>
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
      </ScrollView>
    </View>
  );
}

function getProfile(): IProfile {
  return {
    id: "p-aa",
    user: {
      id: "aaaa",
      name: "nekoです",
      iconURL:
        "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
    },
    backgroundImageURL:
      "https://cdn-business.nikkei.com/atcl/seminar/19/00123/00005/p01.jpg?__scale=w:576,h:432&_sh=07b0e009e0",
    selfDescription: "にゃんにゃんするにゃん！",
    createdAt: Date.now()
  };
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
