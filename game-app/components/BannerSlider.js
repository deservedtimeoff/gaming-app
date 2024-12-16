import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function BannerSlider({data}) {
    return (
        <View style={styles.imageViewStyle}>
            <Image style={styles.imageStyle} source={data.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageViewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 150,
        width: 300,
        borderRadius: 10,
    }
})