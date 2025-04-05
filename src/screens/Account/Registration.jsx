import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

import Login from '../../components/Registration/Login'
import { changeInfo } from '../../core/actions/infoAction'

export default function Registration() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const onShowInfo = (arg) => {
      dispatch(changeInfo(arg))
      navigate('/info')
   }

   return (
      <View style={styles.registration}>
         <View style={styles.wrapTitle} >
            <Text style={styles.title}>Аккаунт</Text>
         </View>
         <ScrollView style={styles.scroll}>
            <Login/>
            <View style={styles.line}/>
            
            <View style={info.blockInfo}>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('payment')}
               >
                  <Text style={info.textInfo}>Оплата и доставка</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('offer agreement')}
               >
                  <Text style={info.textInfo}>Договор публичной оферты</Text>
               </TouchableOpacity>
               
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   registration: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50,
      width: '100%'
   },
   wrapTitle: {
      width: '100%',
      height: 38,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'darkgray',
   },
   title: {
      fontSize: 18,
      color: '#454545',
   },
   arrowLeft: {
      width: 32,
      height: 28,
      marginLeft: 16
  },
   scroll: {
      width: '100%',
   },
   wrapContent: {
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto'
   },
   titleInput: {
      fontSize: 19,
      fontWeight: '600',
      color: '#454545',
      marginTop: 25,
   },
   textInput: {
      height: 60, 
      width: '100%',
      borderColor: 'darkgray', 
      borderWidth: 1,
      fontSize: 16,
      marginTop: 20,
      paddingLeft: 18,
      color: '#454545',
   },
   error: {
      color: 'red', 
      fontSize: 12,
      marginTop: 4,
      marginLeft: 8
   },
   wrapForgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginTop: 18
   },
   textForgotPassword: {
      fontSize: 14,
      color: '#0c97c2',
   },
   btn: {
      width: '100%',
      height: 55,
      backgroundColor: '#fafafa',
      fontSize: 16,
      marginTop: 18,
      alignItems: 'center',
      justifyContent: 'center'
   },
   textBtn: {
      fontSize: 16,
      color: '#454545',
   },
   textRegistration: {
      fontSize: 14,
      color: '#454545',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20
   },
   line: {
      width: '100%',
      backgroundColor: '#fafafa',
      height: 10,
      marginTop: 26
   },

   
})

const info = StyleSheet.create({
   blockInfo: {
      with: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 10,
   },
   block: {
      justifyContent: 'center',
      height: 52,
      borderBottomWidth: 1,
      borderColor: 'darkgray',
      paddingLeft: 8,
      marginTop: 8
   },
   textInfo: {
      fontSize: 17,
      color: '#454545',
   }
})