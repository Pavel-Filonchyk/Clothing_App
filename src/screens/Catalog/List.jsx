import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default function List() {
    const navigate = useNavigate()

    const list = useSelector(({getCatalogReducer: { list }}) => list)

    return (
        <View style={styles.list}>
            <TouchableOpacity onPress={() => navigate('/catalog')} activeOpacity={1} style={styles.link}>
                <Image 
                    style={styles.arrowLeft}
                    source={require('./images/arrowLeft.png')}
                />
                </TouchableOpacity>
            <View style={styles.wrapImg}>
                <Image 
                    style={styles.listImg}
                    source={require('./images/list.jpg')}
                />
            </View>
            <Text style={styles.text}>{list}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 10,
        textDecoration: 'none'
    },
    arrowLeft: {
        width: 40,
        height: 40,
    },
    wrapImg: {
        width: '100%', 
        height: '100%',
        //opacity: 0.9,
    },
    listImg: {
        width: 'auto',
        height: '100%'
    },
    text: {
        position: 'absolute',
        top: '50%',
        fontSize: 42,
        fontWeight: 900,
        color: '#454545',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
})