import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {List} from "./components/Friend/List";

export const Friend = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Text>Hello Fakebook Friend</Text>
        <List />
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
