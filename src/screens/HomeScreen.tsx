import * as React from "react";
import { View, FlatList, Text } from "react-native";
import { Activity } from "../components/Activity/Activity";
import { IActivity } from "../types/Activity";
import { actionCreator, RootState } from "../redux";
import { Action, Dispatch } from "redux";
import { connect } from "react-redux";

interface Props {
  text: string;
  setString: (text: string) => void;
}

export function HomeScreen(props: Props, { navigation }) {
  const activities = getActivities(["id"]);

  return (
    <View style={{ backgroundColor: "gray" }}>
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

const mapStateToProps = (state: RootState) => {
  return {
    text: state.home.text
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    setString: (text: string) => {
      dispatch(actionCreator.home.setString({ text }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
    },
    {
      id: "a-113",
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
      id: "a-114",
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
      id: "a-115",
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
