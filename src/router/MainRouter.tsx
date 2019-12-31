import { Home } from "../screens/Home";
import { FriendList } from "../screens/FriendList";
import { GroupList } from "../screens/GroupList";
import { Profile } from "../screens/Profile";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { NoticeList } from "../screens/NoticeList";
import { Setting } from "../screens/Setting";

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: "ホーム"
      })
    },
    FriendList: {
      screen: FriendList,
      navigationOptions: () => ({
        tabBarLabel: "知り合い"
      })
    },
    GroupList: {
      screen: GroupList,
      navigationOptions: () => ({
        tabBarLabel: "グループ"
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarLabel: "プロフィール"
      })
    },
    NoticeList: {
      screen: NoticeList,
      navigationOptions: () => ({
        tabBarLabel: "お知らせ"
      })
    },
    Setting: {
      screen: Setting,
      navigationOptions: () => ({
        tabBarLabel: "設定"
      })
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#e3463d",
      inactiveTintColor: "#c4c4c4",
      style: {
        backgroundColor: "#ffffff",
        paddingTop: 40
      },
      indicatorStyle: {
        backgroundColor: "#e3463d",
        height: 3
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: "bold"
      },
      scrollEnabled: true,
      tabStyle: {
        width: "auto"
      }
    }
  }
);
