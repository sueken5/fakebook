import * as React from "react";
import { Button, View, Text, Image, Alert } from "react-native";
import { WorldIcon } from "../components/Icon/WorldIcon";
import { EyeIcon } from "../components/Icon/EyeIcon";

export function GroupScreen({ navigation }) {
  return (
    <View>
      <Image
        style={{ height: 200 }}
        source={{ uri: "https://jakyosai-hiroshima.jp/img/cat/201908/07.jpg" }}
      />
      <Text>猫ちゃんずクラブ</Text>
      <Text>公開グループ</Text>
      <Text>メンバー1.2万人</Text>
      <Button
        title={"グループに参加"}
        onPress={() => Alert.alert("参加しました")}
      />
      <View style={{ borderTopColor: "gray", borderTopWidth: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>情報</Text>
          <Button title={"全て見る"} onPress={() => Alert.alert("全て見る")} />
        </View>
        <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <WorldIcon />
            <View>
              <Text>公開</Text>
              <Text>メンバーとグループ内の投稿は公開されます</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <EyeIcon />
          <View>
            <Text>検索可能</Text>
            <Text>誰でもこのグループを検索可能</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
