import {FlatList, View} from "react-native";
import * as React from "react";
import {StoryItem} from "./StoryItem";

export const Stories = () => (
    <View style={{backgroundColor: "#fff", padding: 10, flexDirection:"row"}}>
        <FlatList horizontal data={mockData} renderItem={
            ({item}) => (
                <View style={{padding: 5}}>
                   <StoryItem source={require("../../assets/back_sakura.jpg")} text={item.text}/>
                </View>
            )
        }/>
    </View>
);

const mockData = [
    {
        "text": "ストーリーズ",
        "icon": "",
    },
    {
        "text": "ストーリーズ",
        "icon": "",
    },
    {
        "text": "ストーリーズ",
        "icon": "",
    },
    {
        "text": "ストーリーズ",
        "icon": "",
    },
    {
        "text": "ストーリーズ",
        "icon": "",
    },
    {
        "text": "ストーリーズ",
        "icon": "",
    },
];
