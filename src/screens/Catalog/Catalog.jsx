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
            dispatch(getSubcatalog(arg.subcatalog))
            navigate('/subcatalog')
        } else {
            dispatch(getList(arg.list))
            navigate('/list')
        }
    }

    const images = [
        <Image style={{width: 28, height: 32}} source={require('./images/list.png')}/>,
        <Image style={styles.img} source={require('./images/new.png')}/>,
        <Image style={{width: 29, height: 29}} source={require('./images/office.png')}/>,
        <Image style={{width: 29, height: 29}} source={require('./images/pop.png')}/>,
        <Image style={styles.img} source={require('./images/%.png')}/>,
        <Image style={{width: 29, height: 29}} source={require('./images/premium.png')}/>,
        <Image style={styles.img} source={require('./images/fashion.png')}/>,
        <Image style={{width: 32, height: 38}} source={require('./images/bigSize.png')}/>,
        <Image style={{width: 34, height: 39}} source={require('./images/beauti.png')}/>
    ]

    return (
        <View style={styles.catalog}>
            <ScrollView>
                {catalog.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.block}
                            key={item.id}
                            onPress={() => onCatalog({subcatalog: item.subcatalog, list: item.nameCatalog, index})}
                        >
                            <View style={{width: 34, height: 34, marginRight: 10}}>
                                {images[index]}
                            </View>
                            <Text style={styles.text}>{item.nameCatalog}</Text>
                            {
                                index < 5 ? <Image style={styles.arrow} source={require('./images/arrowRight.png')}/> : ''
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
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    img: {
        width: 32,
        height: 32
    },
    text: {
        fontSize: 18,
        color: '#454545',
    },
    arrow: {
        width: 28,
        height: 28,
        position: 'absolute',
        right: 4
    }
})


