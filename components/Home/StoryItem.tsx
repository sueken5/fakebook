import {Image, ImageSourcePropType, View} from "react-native";
import * as React from "react";

interface Props {
    source: ImageSourcePropType;
    text: string;
}

export const StoryItem = (props: Props) => (
    <View>
        <Image style={{height: 200, width: 100, borderRadius: 10}} source={props.source}/>
    </View>
);
