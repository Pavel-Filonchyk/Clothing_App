import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView, Linking } from 'react-native'

import { changeInfo } from '../../core/actions/infoAction'

export default function InfoBlock() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onShowInfo = (arg) => {
      dispatch(changeInfo(arg))
      navigate('/info')
   }

   return (
      <View style={{width: '100%'}}> 
         <View style={info.blockInfo}>
            <TouchableOpacity style={info.block}
               onPress={() => onShowInfo('Оплата и доставка')}
            >
               <Text style={info.textInfo}>Оплата и доставка</Text>
            </TouchableOpacity>
            <TouchableOpacity style={info.block}
               onPress={() => onShowInfo('Возврат')}
            >
               <Text style={info.textInfo}>Возврат</Text>
            </TouchableOpacity>
            <TouchableOpacity style={info.block}
               onPress={() => onShowInfo('Контакты')}
            >
               <Text style={info.textInfo}>Контакты</Text>
            </TouchableOpacity>
            <TouchableOpacity style={info.block}
               onPress={() => onShowInfo('Договор публичной оферты')}
            >
               <Text style={info.textInfo}>Договор публичной оферты</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const info = StyleSheet.create({
   blockInfo: {
      width: '100%',
      paddingLeft: 32,
      paddingRight: 32,
   },
   block: {
      justifyContent: 'center',
      height: 52,
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
      paddingLeft: 8,
      marginTop: 8
   },
   blockFlags: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 52,
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
      paddingLeft: 8,
      marginTop: 8
   },
   textInfo: {
      fontSize: 17,
      color: '#454545',
   },
   wrapNetworks: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      marginTop: 20,
   },
   wrapImg: {
      width: 'auto',
      height: '100%'
   },
   img: {
      width: 40,
      height: 40,
      marginLeft: 6,
      marginRight: 6
   }
})