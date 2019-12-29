import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import * as React from "react";

interface Props {
   source: ImageSourcePropType;
   description: string;
}

export const Icon = (props: Props) => (
    <View style={{width: 100, alignItems: 'center'}}>
        <View style={{padding: 10}}>
            <View style={{backgroundColor: "#d3d3d3", borderRadius: 50, width: 50, padding: 15}}>
                <Image style={{height: 20, width: 20}} source={props.source}/>
            </View>
        </View>
        <View>
            <Text style={{textAlign:"center", color: "#696969"}}>{props.description}</Text>
        </View>
    </View>
);
