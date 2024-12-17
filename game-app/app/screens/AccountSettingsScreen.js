import React, {useContext, useState} from 'react'

import {View, Text } from 'react-native'
import {AuthContext, instance} from "../context/AuthContext";

const AccountSettingsScreen = () => {
    const url = 'https://powerful-badlands-80348-953c56814af8.herokuapp.com/user/getUser';
    const {email} = useContext(AuthContext);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [name, setName] = useState('');

    let data = JSON.stringify({
        "email": "jdoe@gmail.com",
    });

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'user/getUser',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    instance.get(url, config)
        .then((response) => {
            const result = response.data;
            const {message, status, data} = result;
            console.log('I am here');
        }).catch((error) => {
        console.log(error);
    });

    return (
        <View>
            <Text>Test</Text>
            <Text>Test</Text>
        </View>
    )
}

export default AccountSettingsScreen;