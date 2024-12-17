import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function InputField({label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, onChangeText}) {
    const [text, setText] = useState('');

    return (
        <View style={styles.emailViewStyle}>
            {icon}
            {inputType === 'password'
                ? ( <TextInput placeholder={label} style={styles.emailTextStyle} secureTextEntry={true} keyboardType={keyboardType} onChangeText={onChangeText}/> )
                : ( <TextInput placeholder={label} style={styles.emailTextStyle} keyboardType={keyboardType} onChangeText={onChangeText}/>
                )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{color: '#AD40AF'}}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});