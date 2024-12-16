import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const GameDetailsScreen = ({navigation, route}) => {
    return (
        <View style={styles.viewStyle}>
            <Text>Game Details Screen</Text>
            <Text>{route.params?.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameDetailsScreen;