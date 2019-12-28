import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Home} from "./Home";
import {Friend} from "./Friend";
import {Group} from "./Group";
import {Profile} from "./Profile";
import {Notice} from "./Notice";
import {Setting} from "./Setting";

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home' },
        { key: 'friend', title: 'Friend' },
        { key: 'group', title: 'Group' },
        { key: 'profile', title: 'Profile' },
        { key: 'notice', title: 'Notice' },
        { key: 'setting', title: 'Setting' }
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
        <TabView
            navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
    />
);
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
