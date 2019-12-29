import {FlatList, View} from "react-native";
import * as React from "react";
import {Item} from "./Item";

export const List = () => (
    <View>
        <FlatList data={data} renderItem={({item}) => (
                <Item source={require("../../assets/kawaii_neco.jpg")} text={item.text} createdAt={item.createdAt}/>
                )}
        />
    </View>
);

const data = [
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
        {
                "text": "今日は可愛い猫さんの誕生日です。誕生日のメッセージを投稿しよう！",
                "createdAt": "5時間前"
        },
]
