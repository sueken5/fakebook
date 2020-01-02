import * as React from "react";
import { Button, View, Text, Image, Alert, ScrollView } from "react-native";
import { GroupPanelList } from "../components/Group/GroupPanelList";
import { SearchIcon } from "../components/Icon/SearchIcon";
import { getGroups } from "../mock";

export function GroupListScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "gray" }}>
        <View
          style={{ backgroundColor: "#ffffff", padding: 5, marginBottom: 5 }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 30 }}>グループ</Text>
            <View
              style={{
                backgroundColor: "#d3d3d3",
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <SearchIcon />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button
              title={"参加しているグループ"}
              onPress={() => Alert.alert("参加")}
            >
              参加しているグループ
            </Button>
            <Button title={"発見"} onPress={() => Alert.alert("発見")}>
              発見
            </Button>
            <Button title={"作成"} onPress={() => Alert.alert("作成")}>
              作成
            </Button>
          </View>
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
