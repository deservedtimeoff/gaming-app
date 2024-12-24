import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {windowWidth} from "../app/utils/Dimensions";

export default function ListItem({data, onPress}) {
    return (
        <View style={styles.outerViewStyle}>
            <View style={styles.imageViewStyle}>
                <Image source={{uri: data.poster}} style={styles.imageStyle}></Image>
                <View style={{width: windowWidth -220}}>
                    <Text numberOfLines={1} style={styles.gameTextStyle}>{data.title}</Text>
                    <Text style={styles.companyTextStyle}>{data.subtitle}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.touchableStyle} onPress={onPress}>
                <Text style={styles.playTextStyle}>
                    {data.isFree === true ? 'Play' : data.price}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        height: 55,
        width: 55,
        borderRadius: 10,
        marginRight: 8
    },
    companyTextStyle: {
        color: '#333',
        fontFamily: 'Roboto-Medium',
        fontSize: 14
    },
    gameTextStyle: {
        color: '#333',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    touchableStyle: {
        backgroundColor: '#0aada8',
        padding: 10,
        width: 100,
        borderRadius: 10
    },
    playTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 14
    },
    outerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    }
});