import {Image, ImageSourcePropType, Text, View} from "react-native";
import * as React from "react";

interface Props {
   source: ImageSourcePropType;
   text: string;
   createdAt: string;
}

export const Item = (props: Props) => (
    <View style={{flexDirection:"row", backgroundColor: "#fff"}}>
        <View style={{padding: 10}}>
            <Image style={{height:90, width: 90, borderRadius: 50}} source={props.source}/>
        </View>
        <View style={{flex: 5, justifyContent: "space-between", paddingHorizontal: 5, paddingVertical: 10}}>
            <View>
                <Text style={{fontSize: 18}}>{props.text}</Text>
            </View>
            <View>
                <Text>{props.createdAt}</Text>
            </View>
        </View>
        <View style={{flex:1, alignItems:"center"}}>
            <Image style={{height: 20, width: 20}} source={require("../../assets/icons/more.png")}/>
        </View>
    </View>
);
