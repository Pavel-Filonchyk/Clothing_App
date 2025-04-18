import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getCatalog } from '../../core/actions/getCatalogAction'
import { getDataAccount } from '../../core/actions/loginAction'

export default function Main() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCatalog())
    }, [])
    useEffect(() => {
        const getItemStorage = async () => {
            try {
                const value = await AsyncStorage.getItem('auth')
                const auth = JSON.parse(value)
                console.log(auth)
                if (auth.id){
                    dispatch(getDataAccount({
                        "action": "dataUser",
                        "id": auth.id,
                        "password": auth.password
                    }))
                }
                
            } catch(e) {
                console.log(e)
            }
        }
        getItemStorage()
    }, [])
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
