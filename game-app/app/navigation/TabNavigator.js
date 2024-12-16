import React from 'react';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CartScreen from "../screens/CartScreen";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import {Ionicons} from "@expo/vector-icons";
import Feather from 'react-native-vector-icons/Feather';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import GameDetailsScreen from "../screens/GameDetailsScreen";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator>
                <Stack.Screen component={HomeScreen} name="Home" options={{headerShown: false}}/>
                <Stack.Screen
                    component={GameDetailsScreen}
                    name="GameDetails"
                    options={({route}) => (
                        {title: route.params?.title}
                    )}
                />
            </Stack.Navigator>
        </GestureHandlerRootView>
    )
}

const TabNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {backgroundColor: '#AD40AF'},
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'black',
            }}>
                <Tab.Screen name="Home2" component={HomeStack} options={({route}) => ({
                    tabBarStyle: {display: getTabBarVisibility(route), backgroundColor: '#AD40AF'},
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" color={color} size={size}/>
                    )
                })}/>
                <Tab.Screen name="Cart" component={CartScreen} options={{
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {backgroundColor: 'black'},
                    tabBarIcon: ({color, size}) => (
                        <Feather name="shopping-bag" color={color} size={size} />
                    )
                }}/>
                <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    )
                }}/>
            </Tab.Navigator>
        )
}

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    switch(routeName) {
        case 'GameDetails':
            return 'none';
        case 'Home':
            return 'flex';
    }
}

export default TabNavigator;