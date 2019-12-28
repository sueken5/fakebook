import {Image, StyleSheet, Text, View, Button, Alert} from "react-native";
import * as React from "react";
import {YesButton} from "../Button/YesButton";
import {NoButton} from "../Button/NoButton";

export const Card = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' , flexDirection: "row", padding: 5}]} >
        <View style={{flex: 1}}>
            <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../../assets/kawaii_neco.jpg')} />
        </View>
        <View style={{padding:5, flex: 2.5}}>
            <Text>猫です</Text>
            <Text>共通の知り合い: いっぱい</Text>
            <View style={{flexDirection: "row", padding: 2, justifyContent: 'space-between'}}>
                <YesButton />
                <NoButton />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
