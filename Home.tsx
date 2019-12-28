import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

export const Home = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Text>Hello Fakebook Home</Text>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
