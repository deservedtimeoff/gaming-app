import React, {useContext, useState} from 'react'
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import ImagePath from '../assets/images/menu-bg.jpeg';

import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Ionicons} from "@expo/vector-icons";
import {AuthContext, instance} from "../app/context/AuthContext";

const CustomDrawer = (props) => {
    const [userImage, setUserImage] = useState('');

    const {logout, userToken} = useContext(AuthContext);

    const [loadedFont] = useFonts({Roboto_500Medium, Roboto_400Regular});
    if (!loadedFont)
    {
        return null;
    }

    if (userImage === '') {
        instance.get(`/user/getUser?userId=${userToken}`)
            .then((response) => {
                const result = response.data;
                const {data, message, status} = result;

                if (status !== "SUCCESS") {
                    console.log(message);
                } else {
                    const user = data;
                    setUserImage(user.profileImage);
                }
            })
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <ImageBackground
                    source={ImagePath}
                    style={{padding: 20}}
                >
                    <Image style={styles.userImageStyle} source={{uri: userImage}}/>
                    <Text style={styles.userNameStyle}>Shawn Warnock</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.coinStyles}>280 Coins</Text>
                    <FontAwesome5 name="coins" size={14} color="#fff"/>
                    </View>
                </ImageBackground>
                <View style={styles.itemListViewStyle}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        <View style={styles.bottomViewStyle}>
            <TouchableOpacity onPress={() => {}} style={styles.shareTouchableStyle}>
                <View style={styles.shareViewStyle}>
                    <Ionicons name={'share-social-outline'} size={22}/>
                    <Text style={styles.shareTextStyle}>Our Custom Text</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {logout()}} style={styles.shareTouchableStyle}>
                <View style={styles.shareViewStyle}>
                    <Ionicons name={'exit-outline'} size={22}/>
                    <Text style={styles.shareTextStyle}>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userImageStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    userNameStyle: {
        color: '#fff',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18
    },
    coinStyles: {
        color: '#fff',
        fontFamily: 'Roboto_400Regular',
        marginRight: 5
    },
    itemListViewStyle: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    bottomViewStyle: {
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    shareTouchableStyle: {
        paddingVertical: 15
    },
    shareViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    shareTextStyle: {
        fontSize: 15,
        fontFamily: 'Roboto_500Medium',
        marginLeft: 15
    }
})

export default CustomDrawer;