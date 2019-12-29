import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {Page} from "./components/Notice/Page";

export const Notice = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Page/>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
