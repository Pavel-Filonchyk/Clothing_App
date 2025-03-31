import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default function Card () {

    return (
        <View style={styles.card}>
            <View style={styles.wrapImg}>
                <Image 
                    style={styles.mainImg}
                    source={require('./images/card.jpg')}
                />
            </View>
            <Text style={styles.text}>КОРЗИНА</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapImg: {
        width: '100%', 
        height: '100%',
        //opacity: 0.9,
    },
    mainImg: {
        width: 'auto',
        height: '100%'
    },
    text: {
        position: 'absolute',
        top: '50%',
        fontSize: 42,
        fontWeight: 900,
        color: 'gray'
    }
})