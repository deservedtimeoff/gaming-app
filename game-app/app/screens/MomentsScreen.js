import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MomentsScreen = () => {
    return (
        <View style={styles.momentsViewStyle}>
            <Text>Moments Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    momentsViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MomentsScreen;