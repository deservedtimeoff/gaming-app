import React from 'react'

import {View, Text, TextInput} from 'react-native'

const ToggleableTextInput = ({variable, labelText, isEditable, onChangeText}) => {
    return (
        <View style={{flexDirection: 'row', padding: 20, borderBottomWidth: 1, backgroundColor: '#ccc'}}>
            { !isEditable ? ( <Text style={{marginRight: 10}}>{labelText}</Text>) : (<View/>)}
            { isEditable ? (
                <TextInput placeholder={variable} onChangeText={onChangeText} keyboardType={'default'}/>
            ) : (
                <Text>{variable}</Text>
            )}
        </View>
    )
}

export default ToggleableTextInput;