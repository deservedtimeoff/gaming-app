import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchableStyle}>
            <Text style={styles.textStyle}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableStyle: {
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 16,
        color: '#fff'
    }
});