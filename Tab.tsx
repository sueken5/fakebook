import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Home} from "./Home";
import {Friend} from "./Friend";
import {Group} from "./Group";
import {Profile} from "./Profile";
import {Notice} from "./Notice";
import {Setting} from "./Setting";
import SafeAreaView from "react-native-safe-area-view";

const initialLayout = { width: Dimensions.get('window').width };

export default function Tab() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'home', title: 'Home'},
        {key: 'friend', title: 'Friend'},
        {key: 'group', title: 'Group'},
        {key: 'profile', title: 'Profile'},
        {key: 'notice', title: 'Notice'},
        {key: 'setting', title: 'Setting'}
    ]);

    const renderScene = SceneMap({
        home: Home,
        friend: Friend,
        group: Group,
        profile: Profile,
        notice: Notice,
        setting: Setting,
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={styles.container}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    },
});
