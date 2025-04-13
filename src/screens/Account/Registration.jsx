import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView, Linking } from 'react-native'
import InfoBlock from '../../components/Info/InfoBlock'
import Flag from 'react-native-flags'

import Login from '../../components/Registration/Login'
import NetWorks from '../../components/NetWorks/NetWorks'
import { changeInfo } from '../../core/actions/infoAction'

export default function Registration() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const [currency, setCurrency] = useState('BYN')

   const onShowInfo = (arg) => {
      dispatch(changeInfo(arg))
      navigate('/info')
   }

   return (
      <View style={styles.registration}>
         <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            <Login/>
            <View style={styles.line}/>

            {/* currency */}
            <TouchableOpacity style={info.blockFlags}
               //onPress={() => onShowInfo('')}
            >
               <Text style={info.textInfo}>Валюта</Text>
               <TouchableOpacity onPress={() => setCurrency(prev => prev === 'BYN' ? 'RUB' : 'BYN')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                     <Flag 
                        code={currency === 'BYN' ? 'BY' : 'RU'} 
                        size={32} 
                     />
                     <Text style={{marginLeft: 8, color: '#454545'}}>
                        {currency === 'BYN' ? 'BYN' : 'RUB'}
                     </Text>
                  </View>
               </TouchableOpacity>
            </TouchableOpacity>
            {/* info */}
            <InfoBlock/>
            <View style={styles.wrapBtn}>
               <TouchableOpacity 
                  style={styles.btn}
                  onPress={() => onShowInfo('Связаться с поддержкой')}
               >
                  <Text style={styles.textBtn}>Связаться с поддержкой</Text>                            
               </TouchableOpacity>
            </View>
            {/* networks */}
            <NetWorks/>
            
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   registration: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      paddingBottom: 50
   },
   wrapTitle: {
      width: '100%',
      height: 38,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
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
   wrapBtn: {
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto'
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
   blockFlags: {
      marginLeft: 32,
      marginRight: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 52,
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
      paddingLeft: 8,
      marginTop: 12
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