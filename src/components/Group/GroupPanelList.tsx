import * as React from "react";
import { FlatList, View } from "react-native";
import { IGroup } from "../../types/Group";
import { GroupPanel } from "./GroupPanel";

interface Props {
  groups: IGroup[];
  onPressPanel: (id: string) => void;
}

export const GroupPanelList = (props: Props) => {
  return (
    <FlatList
      data={props.groups}
      renderItem={({ item }) => (
        <View style={{ marginRight: 5 }}>
          <GroupPanel
            group={item}
            onPress={() => props.onPressPanel(item.id)}
          />
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
