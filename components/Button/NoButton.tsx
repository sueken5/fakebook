import {View, Button, Alert} from "react-native";
import * as React from "react";

export const NoButton = () => (
    <View style={{backgroundColor: "gray", width: 130, borderRadius: 5}}>
        <Button
            title="削除"
            color="#fff"
            onPress={() => Alert.alert('にゃーん')}
        />
    </View>
);
