import React, {useContext, useState} from 'react'

import {View, Text } from 'react-native'
import {AuthContext, instance} from "../context/AuthContext";

const AccountSettingsScreen = () => {
    const url = 'https://powerful-badlands-80348-953c56814af8.herokuapp.com/user/getUser';
    const {email} = useContext(AuthContext);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [name, setName] = useState('');

    const axios = instance;
    let data = JSON.stringify({
        "email": "shwarnock89@gmail.com"
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

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
        });


    return (
        <View>
            <Text>Test</Text>
            <Text>Test</Text>
        </View>
    )
}

export default AccountSettingsScreen;