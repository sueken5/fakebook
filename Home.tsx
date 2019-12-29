import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {Page} from "./components/Home/Page";

export const Home = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Page/>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
