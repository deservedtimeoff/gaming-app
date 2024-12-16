import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.profileScreenStyle}>
            <Text>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileScreenStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProfileScreen;