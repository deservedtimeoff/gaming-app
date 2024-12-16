import React, {useState} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

import RegistrationSVG from '../../assets/images/misc/registration.svg'
import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import {ScrollView} from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterScreen = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');

    const [loadedFont] = useFonts({Roboto_500Medium});
    if (!loadedFont)
    {
        return null;
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setDobLabel(currentDate.toLocaleDateString());
    }

    const showDatepicker = () => {
        setShow(true);
        setMode(mode);
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
        emailTextStyle: {
            flex: 1,
            paddingVertical: 0
        },
        emailViewStyle: {
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25
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
        },
        datePickerViewStyle: {
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25
        }
    });

    return (
        <SafeAreaView style={styles.viewStyle}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
                <View style={styles.imageViewStyle}>
                    <RegistrationSVG height={300} width={300} style={styles.loginImageStyle}/>
                </View>
                <Text style={styles.loginTextStyle}>Register</Text>
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
                <Text style={styles.alternateLoginTextStyle}>Or, register with email...</Text>
                <InputField label={'Full Name'} icon={<Ionicons name="person-outline" size={20} color="#666" style={{marginRight: 5, paddingVertical: 0}}/>} />
                <InputField
                    label={'Email ID'}
                    icon={<MaterialIcons name='alternate-email' size={20} color={'#666'} style={{marginRight: 5, paddingVertical: 0}}/>}
                    keyboardType={'email-address'}
                />
                <InputField
                    label={'Password'}
                    icon={<Ionicons name='lock-closed-outline' size={20} color={'#666'} style={{marginRight: 5, paddingVertical: 0}}/>}
                    inputType={'password'} />
                <InputField
                    label={'Confirm Password'}
                    icon={<Ionicons name='lock-closed-outline' size={20} color={'#666'} style={{marginRight: 5, paddingVertical: 0}}/>}
                    inputType={'password'}
                />
                <View style={styles.datePickerViewStyle}>
                    <Ionicons name={'calendar-outline'} size={20} color={'#666'} style={{paddingVertical: 0, marginRight: 5}}/>
                    <TouchableOpacity onPress={showDatepicker}>
                        <Text style={{color: '#666', flex: 1, paddingVertical: 0, marginLeft: 5}}>{dobLabel}</Text>
                    </TouchableOpacity>
                </View>
                { show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hours={false}
                        onChange={onChange}
                        maximumDate={new Date(2005, 0, 1)}
                        minimumDate={new Date(1900, 0, 1)}
                    />
                )}
                <CustomButton label={'Register'} onPress={() => {}}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
                    <Text>Already registered?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.registerTextStyle}> Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;