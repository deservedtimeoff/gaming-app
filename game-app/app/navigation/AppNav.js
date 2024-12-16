import AuthStack from "./AuthStack";
import {StyleSheet} from "react-native";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import { View, ActivityIndicator} from "react-native";
import AppStack from "./AppStack";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading)
    {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
            )
    }
    return (
        <GestureHandlerRootView>
            {userToken != null ? <AppStack/> :  <AuthStack style={styles.authStackStyle}/>}
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    authStackStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AppNav;