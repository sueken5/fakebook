import {StyleSheet, Text, View, FlatList} from "react-native";
import * as React from "react";
import {Card} from "./Card";

export const List = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <FlatList
            data={[
                {key: 'neco1'},
                {key: 'neco2'},
                {key: 'neco3'},
                {key: 'neco4'},
                {key: 'neco5'},
                {key: 'neco6'},
                {key: 'neco7'},
                {key: 'neco8'},
                {key: 'neco9'},
                {key: 'neco10'},
            ]}
            renderItem={({}) => <Card />}
        />
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
