import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ActivityScreen } from "../screens/ActivityScreen";
import { PostActivityScreen } from "../screens/PostActivityScreen";
import { StoriesScreen } from "../screens/StoriesScreen";
import { PostStoryScreen } from "../screens/PostStoryScreen";
import { GroupScreen } from "../screens/GroupScreen";
import { MediaScreen } from "../screens/MediaScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SearchResultScreen } from "../screens/SearchResultScreen";
import MainRouter from "./MainRouter";
import { ReactionsScreen } from "../screens/ReactionsScreen";
import { CommentsScreen } from "../screens/CommentsScreen";

const Router = createStackNavigator(
  {
    Main: {
      screen: MainRouter
    },
    Group: {
      screen: GroupScreen,
      path: "group/:id"
    },
    Profile: {
      screen: ProfileScreen,
      path: "profile/:id"
    },
    Activity: {
      screen: ActivityScreen,
      path: "activity/:id"
    },
    Reactions: {
      screen: ReactionsScreen
    },
    Comments: {
      screen: CommentsScreen
    },
    PostActivity: {
      screen: PostActivityScreen
    },
    Stories: {
      screen: StoriesScreen
    },
    PostStory: {
      screen: PostStoryScreen
    },
    Media: {
      screen: MediaScreen
    },
    Search: {
      screen: SearchScreen
    },
    SearchResult: {
      screen: SearchResultScreen
    }
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(Router);
