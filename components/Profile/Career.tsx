import {Image, ImageSourcePropType, Text, View} from "react-native";
import * as React from "react";

interface Props {
    source: ImageSourcePropType;
    description: string;
}

export const Career = (props: Props) => (
    <View style={{flexDirection:"row", padding: 5}}>
        <Image style={{height: 20, width: 20}} source={props.source}/>
        <View style={{paddingHorizontal: 5}}>
            <Text style={{fontSize: 20}}>{props.description}</Text>
        </View>
    </View>
);
