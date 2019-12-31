import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Activity } from "../screens/Activity";
import { PostActivity } from "../screens/PostActivity";
import { Stories } from "../screens/Stories";
import { PostStory } from "../screens/PostStory";
import { Group } from "../screens/Group";
import { Media } from "../screens/Media";
import { Search } from "../screens/Search";
import { SearchResult } from "../screens/SearchResult";
import MainRouter from "./MainRouter";

const Router = createStackNavigator(
  {
    Main: {
      screen: MainRouter
    },
    Group: {
      screen: Group,
      path: "group/:id"
    },
    Profile: {
      screen: Profile,
      path: "profile/:id"
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
    initialRouteName: "Main"
  }
);

export default createAppContainer(Router);
