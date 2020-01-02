import * as React from "react";
import { Button, View, Text, Image, Alert, ScrollView } from "react-native";
import { GroupPanelList } from "../components/Group/GroupPanelList";
import { SearchIcon } from "../components/Icon/SearchIcon";
import { getGroups } from "../mock";
import { ScreenHeader } from "../components/Screen/ScreenHeader";

export function GroupListScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "gray" }}>
        <View style={{ marginBottom: 10 }}>
          <ScreenHeader
            name={"グループ"}
            buttons={[
              {
                key: "参加しているグループ",
                onPress: () => Alert.alert("参加")
              },
              {
                key: "発見",
                onPress: () => Alert.alert("発見")
              },
              {
                key: "作成",
                onPress: () => Alert.alert("作成")
              },
              {
                key: "設定",
                onPress: () => Alert.alert("設定")
              }
            ]}
          />
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            padding: 5,
            height: 350,
            marginBottom: 5
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 30 }}>おすすめのグループ</Text>
            <Text>全て見る</Text>
          </View>
          <Text style={{ fontSize: 20, color: "gray" }}>
            おすすめのグループ
          </Text>
          <GroupPanelList
            groups={getGroups()}
            onPressPanel={(id: string) => {
              navigation.navigate("Group", { id });
            }}
          />
        </View>
        <View style={{ backgroundColor: "#ffffff", padding: 5, height: 350 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 30 }}>おすすめのグループ</Text>
            <Text>全て見る</Text>
          </View>
          <Text style={{ fontSize: 20, color: "gray" }}>
            おすすめのグループ
          </Text>
          <GroupPanelList
            groups={getGroups()}
            onPressPanel={(id: string) => {
              return () => {
                navigation.navigate("Group", { id });
              };
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
