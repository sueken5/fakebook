import {View} from "react-native";
import * as React from "react";
import {Form} from "./Form";
import {Stories} from "./Stories";

export const Page = () => (
    <View style={{backgroundColor: "gray"}}>
        <View>
            <Form/>
        </View>
        <View style={{marginTop: 10}}>
            <Stories/>
        </View>
        <View style={{marginTop: 10}}>
            <Stories/>
        </View>
    </View>
);
