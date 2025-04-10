import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
//import { catalog } from '../../constants/catalog'
import { getSubcatalog, getList } from '../../core/actions/getCatalogAction'

export default function Catalog() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const catalog = useSelector(({getCatalogReducer: { catalog }}) => catalog)

    const onCatalog = (arg) => {
        //console.log(arg)
        if (arg.index < 5){
            dispatch(getSubcatalog(arg))
            navigate('/subcatalog')
        } else {
            dispatch(getList(arg))
            navigate('/list')
        }
    }

    return (
        <View style={styles.catalog}>
            <View style={styles.header}>
                <Text style={styles.title}>Поиск</Text>
                <TouchableOpacity>
                    <Image 
                        style={styles.search}
                        source={require('./images/search.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {catalog.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.block}
                            key={item.id}
                            onPress={() => onCatalog({subcatalog: item.subcatalog, list: item.nameCatalog, index})}
                        >
                            <Text style={styles.text}>{item.nameCatalog}</Text>
                            {
                                index < 5 ? <Image style={styles.arrow} source={require('./images/arrow.png')}/> : ''
                            }
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    catalog: {
        flex: 1,
        marginTop: 68
    },
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#e9eff1',
        marginBottom: 16
     },
     title: {
        fontSize: 20,
        color: 'gray',
        marginLeft: 50
     },
    search: {
        width: 32,
        height: 32,
        marginRight: 20
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderColor: '#e9eff1',
    },
    img: {
        width: 32,
        height: 32
    },
    text: {
        fontSize: 17,
        color: '#454545',
    },
    arrow: {
        width: 28,
        height: 28,
        position: 'absolute',
        right: 4
    }
})


