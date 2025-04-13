import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { useNavigate } from 'react-router-native'

import { getList } from '../../core/actions/getCatalogAction'

export default function Subcatalog() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const subcatalog = useSelector(({getCatalogReducer: { subcatalog }}) => subcatalog)

   const onSubcatalog = (arg) => {
      dispatch(getList({list: arg}))
      navigate('/list')
   }

   return (
      <View style={styles.subcatalog}>
         <View style={styles.header}>
            <TouchableOpacity onPress={() => navigate('/catalog')}>
               <Image 
                  style={styles.arrowLeft}
                  source={require('./images/arrowLeft.png')}
               />
            </TouchableOpacity>
            <Text style={styles.title}>{subcatalog.list}</Text>
            <TouchableOpacity>
               <Image 
                  style={styles.search}
                  source={require('./images/search.png')}
               />
            </TouchableOpacity>
         </View>
         

         <ScrollView showsVerticalScrollIndicator={false}>
            {subcatalog.subcatalog.map((item, index) => {
               return (
                  <TouchableOpacity style={styles.block}
                     key={item.id}
                     onPress={() => onSubcatalog(item.name)}
                  >
                     <Text style={styles.text}>{item.name}</Text>
                     <Image style={styles.arrow} source={require('./images/arrow.png')}/> 
                  </TouchableOpacity>
               )
            })}
         </ScrollView>
   </View>
   )
}

const styles = StyleSheet.create({
   subcatalog: {
      flex: 1,
      marginTop: 68
   },
   header: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
      marginBottom: 18
   },
   title: {
      fontSize: 18,
      color: '#454545',
   },
   arrowLeft: {
      width: 32,
      height: 30,
      marginLeft: 20
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
   },
})