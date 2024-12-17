import React from 'react'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator>
                <Stack.Screen component={SettingsScreen} name="SettingsScreen"/>
                <Stack.Screen component={AccountSettingsScreen} name="AccountSettings"/>
            </Stack.Navigator>
        </GestureHandlerRootView>
    )
};

export default SettingsStack;