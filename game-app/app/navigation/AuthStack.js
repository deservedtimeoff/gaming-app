import React from 'react'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={OnboardingScreen} name="Onboarding"/>
                <Stack.Screen component={LoginScreen} name="Login"/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
            </Stack.Navigator>
        </GestureHandlerRootView>
    )
};

export default AuthStack;