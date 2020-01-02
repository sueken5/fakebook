import HomeScreen from "../screens/HomeScreen";
import { FriendListScreen } from "../screens/FriendListScreen";
import { GroupListScreen } from "../screens/GroupListScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { NoticeListScreen } from "../screens/NoticeListScreen";

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarLabel: "ホーム"
      })
    },
    FriendList: {
      screen: FriendListScreen,
      navigationOptions: () => ({
        tabBarLabel: "知り合い"
      })
    },
    GroupList: {
      screen: GroupListScreen,
      navigationOptions: () => ({
        tabBarLabel: "グループ"
      })
    },
    MyProfile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        tabBarLabel: "プロフィール"
      })
    },
    NoticeList: {
      screen: NoticeListScreen,
      navigationOptions: () => ({
        tabBarLabel: "お知らせ"
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
