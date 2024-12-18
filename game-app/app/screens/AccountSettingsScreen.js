import React, {useContext, useEffect, useState} from 'react'

import {AuthContext, instance} from "../context/AuthContext";
import {Text, TouchableOpacity, View} from "react-native";
import CustomButton from "../../components/CustomButton";
import ToggleableTextInput from "../../components/ToggleableTextInput";

const AccountSettingsScreen = () => {
    const {email} = useContext(AuthContext);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    if (name === '' || dateOfBirth === '' || email === '')
    {
        instance.get(`/user/getUser?email=${email}`)
            .then((response) => {
                const result = response.data;
                const {data, message, status} = result;

                if (status !== "SUCCESS") {
                    console.log(message);
                } else {
                    const user = data[0];
                    setName(user.name);
                    setDateOfBirth(user.dateOfBirth);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const modifyUser = (credentials) => {
        console.log(credentials);
        instance.post('/user/updateUser', credentials).then((response) => {
            const result = response.data;
            const {message, status, data} = result;

            if (status !== "SUCCESS") {
                console.log(message);
            } else {
                setName(data.name);
                setDateOfBirth(data.dateOfBirth);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const handleMakeChangesPressed = () => {
        if (isEditing)
        {
            modifyUser({name: name, email: email, dateOfBirth: dateOfBirth});
        }

        setIsEditing(!isEditing);
    }

    return (
        <View>
            <ToggleableTextInput labelText="Name: " variable={name} isEditable={isEditing} onChangeText={(text) => setName(text)}/>
            <ToggleableTextInput labelText="Emai: " variable={email} isEditable={isEditing} onChangeText={(text) => setEmail(text)}/>
            <ToggleableTextInput labelText="Date of Birth: " variable={new Date(dateOfBirth).toLocaleDateString()} isEditable={isEditing} onChangeText={(text) => setDateOfBirth(text)}/>
            <CustomButton label={isEditing ? 'Save Changes' : 'Make Changes'} onPress={() => {handleMakeChangesPressed()}}/>
        </View>
    )
}

export default AccountSettingsScreen;