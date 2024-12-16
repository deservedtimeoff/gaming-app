import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MessageScreen = () => {
    return (
        <View style={styles.messageScreenStyle}>
            <Text>Message Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageScreenStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MessageScreen;