import {View, Button, Alert} from "react-native";
import * as React from "react";

export const YesButton = () => (
    <View style={{backgroundColor: "blue", width: 130, borderRadius: 5}}>
        <Button
            title="友達になる"
            color="#fff"
            onPress={() => Alert.alert('にゃーん')}
        />
    </View>
);
