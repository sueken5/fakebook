import * as React from "react";
import { Button, View, Text, Image, Alert } from "react-native";
import { WorldIcon } from "../Icon/WorldIcon";
import { EyeIcon } from "../Icon/EyeIcon";
import { IGroup } from "../../types/Group";

interface Props {
  group: IGroup;
}

export const GroupScreenHeader = (props: Props) => {
  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <Image style={{ height: 200 }} source={{ uri: props.group.imageURL }} />
      <View style={{ padding: 5 }}>
        <View style={{}}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            {props.group.name}
          </Text>
          <Text style={{ color: "gray", textAlign: "center" }}>
            公開グループ メンバー{props.group.members.length}人
          </Text>
          <Button
            title={"グループに参加"}
            onPress={() => Alert.alert("参加しました")}
          />
        </View>
        <View style={{ borderTopColor: "gray", borderTopWidth: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>情報</Text>
            <Button
              title={"全て見る"}
              onPress={() => Alert.alert("全て見る")}
            />
          </View>
          <Text>{props.group.description}</Text>
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
    </View>
  );
};
