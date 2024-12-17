import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

import {FontAwesome6} from "@expo/vector-icons";

const SettingsScreen = ({navigation}) => {
    return (
        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#666", padding: 20}} onPress={() => navigation.navigate('AccountSettings')}>
            <View style={styles.container}>
                <Text style={styles.leftItem}>Account Settings</Text>
                <FontAwesome6 name="chevron-right" size={20} color="#666"/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftItem: {
        // Styles for the left item
    },
    rightItem: {
        // Styles for the right item
    },
});

export default SettingsScreen;