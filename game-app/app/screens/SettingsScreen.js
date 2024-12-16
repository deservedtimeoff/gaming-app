import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
    return (
        <View style={styles.settingsScreenStyle}>
            <Text>Settings Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsScreenStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingsScreen;