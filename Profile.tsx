import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {Panel} from "./components/Profile/Panel";

export const Profile = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Text>Hello Fakebook Profile</Text>
        <Panel />
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
