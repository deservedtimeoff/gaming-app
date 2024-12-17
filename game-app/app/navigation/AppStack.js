import React from 'react'

import {createDrawerNavigator} from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import MessageScreen from "../screens/MessageScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawer from "../../components/CustomDrawer";

import {Ionicons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";

const Drawer = createDrawerNavigator();

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import TabNavigator from "./TabNavigator";
import SettingsStack from "./SettingsStack";

const AuthStack = () => {
    const [loadedFont] = useFonts({Roboto_500Medium});

    if (!loadedFont)
    {
        return null;
    }

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {fontFamily: 'Roboto_500Medium'},
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',}}
            style={styles.drawerStyle}
        >
            <Drawer.Screen component={TabNavigator} name="Home"
                options={{drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color}/>
            )}}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}
               options={{drawerIcon: ({color}) => (
                       <Ionicons name="person-outline" size={22} color={color}/>
           )}}/>
            <Drawer.Screen name="Messages" component={MessageScreen}
               options={{drawerIcon: ({color}) => (
                       <Ionicons name="chatbox-ellipses-outline" size={22} color={color}/>
           )}}/>
            <Drawer.Screen name="Moments" component={MomentsScreen}
               options={{drawerIcon: ({color}) => (
                       <Ionicons name="timer-outline" size={22} color={color}/>
           )}}/>
            <Drawer.Screen name="Settings" component={SettingsStack}
               options={{headerShown: true, headerStyle: {backgroundColor: "#aa18ea"}, drawerIcon: ({color}) => (
                       <Ionicons name="settings-outline" size={22} color={color} />
           )}}/>
       </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto_500Medium',
        fontSize: 15
    }
});

export default AuthStack;