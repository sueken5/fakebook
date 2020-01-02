import * as React from "react";
import { View, FlatList } from "react-native";
import { Activity } from "../components/Activity/Activity";
import { actionCreator, RootState } from "../redux";
import { Action, Dispatch } from "redux";
import { connect } from "react-redux";
import { getActivities, getUser } from "../mock";
import { ActivityForm } from "../components/Activity/ActivityForm";

interface Props {
  text: string;
  setString: (text: string) => void;
}

export function HomeScreen(props: Props, { navigation }) {
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
