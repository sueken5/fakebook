import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

export const Friend = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Text>Hello Fakebook Friend</Text>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
