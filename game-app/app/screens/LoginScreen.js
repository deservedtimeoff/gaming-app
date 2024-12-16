import React, {useContext} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'

import LoginSVG from '../../assets/images/misc/login.svg'
import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import {AuthContext} from "../context/AuthContext";

const LoginScreen = ({navigation}) => {
    const {login} = useContext(AuthContext);

    const [loadedFont] = useFonts({Roboto_500Medium});
    if (!loadedFont)
    {
        return null;
    }

    const styles = StyleSheet.create({
        viewStyle: {
            flex: 1,
            justifyContent: 'center'
        },
        loginImageStyle: {
            transform: [{rotate: '-5deg'}]
        },
        imageViewStyle: {
            alignItems: 'center'
        },
        loginTextStyle: {
            fontFamily: 'Roboto_500Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30
        },
        emailViewStyle: {
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25
        },
        emailTextStyle: {
            flex: 1,
            paddingVertical: 0
        },
        loginButtonStyle: {
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30
        },
        loginButtonTextStyle: {
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 16,
            color: '#fff'
        },
        alternateLoginTextStyle: {
            textAlign: 'center',
            color: '#666',
            marginBottom: 30
        },
        altLoginButtonStyle: {
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10
        },
        registerTextStyle: {
            color: '#AD40AF',
            fontWeight: 700
        }
    });

    return (
        <SafeAreaView style={styles.viewStyle}>
            <View style={{paddingHorizontal: 25}}>
                <View style={styles.imageViewStyle}>
                    <LoginSVG height={300} width={300} style={styles.loginImageStyle}/>
                </View>
                <Text style={styles.loginTextStyle}>Login</Text>
                <InputField label={'Email ID'} icon={<MaterialIcons name='alternate-email' size={20} color={'#666'} style={{marginRight: 5, paddingVertical: 0}}/>}/>
                <InputField
                    label={'Password'}
                    icon={<Ionicons name='lock-closed-outline' size={20} color={'#666'} style={{marginRight: 5, paddingVertical: 0}}/>}
                    inputType={'password'}
                    fieldButtonLabel={'Forgot?'}
                    fieldButtonFunction={() => {}}
                />
                <CustomButton onPress={() => {login()}} label={'Login'}/>
                <Text style={styles.alternateLoginTextStyle}>Or, login with ...</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
                    <TouchableOpacity onPress={() => {}} style={styles.altLoginButtonStyle}>
                        <GoogleSVG height={24} width={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.altLoginButtonStyle}>
                        <FacebookSVG height={24} width={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.altLoginButtonStyle}>
                        <TwitterSVG height={24} width={24}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerTextStyle}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;