import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

export const Notice = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Text>Hello Fakebook Notice</Text>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
