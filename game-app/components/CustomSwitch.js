import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CustomSwitch({selectionMode, option1, option2, onSelectSwitch}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    const styles = StyleSheet.create({
        viewStyle: {
            height: 44,
            width: '100%',
            backgroundColor: '#e4e4e4',
            borderRadius: 10,
            borderColor: '#AD40AF',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        touchableStyle1: {
            flex: 1,
            backgroundColor: getSelectionMode === 1 ? '#AD40AF' : '#e4e4e4',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textStyle1: {
            color: getSelectionMode === 1 ? 'white' : '#AD40AF',
            fontSize: 14,
            fontFamily: 'Roboto-Medium'
        },
        touchableStyle2: {
            flex: 1,
            backgroundColor: getSelectionMode === 2 ? '#AD40AF' : '#e4e4e4',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textStyle2: {
            color: getSelectionMode === 2 ? 'white' : '#AD40AF',
            fontSize: 14,
            fontFamily: 'Roboto-Medium'
        }
    });

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={styles.touchableStyle1}
            >
                <Text style={styles.textStyle1}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={styles.touchableStyle2}
            >
                <Text style={styles.textStyle2}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}
