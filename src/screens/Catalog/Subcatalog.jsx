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
      dispatch(getList(arg))
      navigate('/list')
   }

   return (
      <View style={styles.subcatalog}>
         <TouchableOpacity onPress={() => navigate('/catalog')} activeOpacity={1} style={styles.link}>
            <Image 
               style={styles.arrowLeft}
               source={require('./images/arrowLeft.png')}
            />
         </TouchableOpacity>

         <ScrollView>
            {subcatalog.map((item, index) => {
               return (
                  <TouchableOpacity style={styles.block}
                     key={item.id}
                     onPress={() => onSubcatalog(item.name)}
                  >
                     <Text style={styles.text}>{item.name}</Text>
                     <Image style={styles.arrow} source={require('./images/arrowRight.png')}/> 
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
   block: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      marginLeft: 30,
      marginRight: 30,
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
   },
   link: {
      position: 'absolute',
      top: -30,
      left: 18,
      zIndex: 10,
      textDecoration: 'none'
  },
   arrowLeft: {
      width: 40,
      height: 40,
  },
})