import {Image, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {Icons} from "./Icons";
import {CareerList} from "./CareerList";

export const Panel = () => (
    <View style={{ backgroundColor: '#fff'}}>
        <View style={{height: 300}}>
            <Image style={{height: 200, position: "relative"}} source={require('../../assets/back_sakura.jpg')} />
            <View style={{backgroundColor: "white", borderRadius: 100, padding: 3, position:"absolute", top: 120, left: 120}}>
                <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={require('../../assets/kawaii_neco.jpg')} />
            </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>猫です</Text>
            <Text>nyaaaaaaaaaaan</Text>
        </View>
        <Icons />
        <CareerList />
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
