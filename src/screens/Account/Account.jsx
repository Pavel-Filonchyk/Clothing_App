import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default function Account() {

    return (
        <View style={styles.account}>
            <Text style={styles.text}>АККАУНТ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    account: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        position: 'absolute',
        top: '50%',
        fontSize: 42,
        fontWeight: 900,
        color: 'gray'
    }
})