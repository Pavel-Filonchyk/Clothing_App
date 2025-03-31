import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default function Main() {

    return (
        <View style={styles.main}>
            <View style={styles.wrapImg}>
                <Image 
                    style={styles.mainImg}
                    source={require('./images/Main.jpg')}
                />
            </View>
            <Text style={styles.text}>ГЛАВНАЯ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
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
