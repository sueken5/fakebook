import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home } from "../screens/Home";
import { FriendList } from "../screens/FriendList";
import { GroupList } from "../screens/GroupList";
import { Profile } from "../screens/Profile";
import { NoticeList } from "../screens/NoticeList";
import { Setting } from "../screens/Setting";
import { Activity } from "../screens/Activity";
import { PostActivity } from "../screens/PostActivity";
import { Stories } from "../screens/Stories";
import { PostStory } from "../screens/PostStory";
import { Group } from "../screens/Group";
import { Media } from "../screens/Media";
import { Search } from "../screens/Search";
import { SearchResult } from "../screens/SearchResult";

const Router = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    FriendList: {
      screen: FriendList
    },
    GroupList: {
      screen: GroupList
    },
    Group: {
      screen: Group,
      path: "group/:id"
    },
    Profile: {
      screen: Profile,
      path: "profile/:id"
    },
    NoticeList: {
      screen: NoticeList
    },
    Setting: {
      screen: Setting
    },
    Activity: {
      screen: Activity,
      path: "activity/:id"
    },
    PostActivity: {
      screen: PostActivity
    },
    Stories: {
      screen: Stories
    },
    PostStory: {
      screen: PostStory
    },
    Media: {
      screen: Media
    },
    Search: {
      screen: Search
    },
    SearchResult: {
      screen: SearchResult
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Router);
