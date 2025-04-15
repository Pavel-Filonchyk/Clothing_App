import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native'

import Registration from './Registration'
import NetWorks from '../../components/NetWorks/NetWorks'
import { changeInfo } from '../../core/actions/infoAction'

export default function Account() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)
   console.log(statusRegister)

   const [showRegistartion, setShowRegistration] = useState(true)

   useEffect(() => {
     //if(statusRegister)setShowRegistration(false)
   }, [statusRegister])

   const onShowInfo = (arg) => {
      dispatch(changeInfo({page: arg, move: 'add'}))
      navigate('/info')
   }

   return (
      <View style={styles.account}>
         <View style={styles.wrapTitle} >
            <Text style={styles.title}>Аккаунт</Text>
         </View>
         
         {/* Аккаунт */}
         <View  style={{display: showRegistartion ? 'none' : 'flex', width: '100%'}}>
            {/* profile */}
            <View style={styles.wrapProfile}>
               <View style={styles.profile}>
                  <View style={styles.wrapAvatar}>
                     <Image 
                        style={styles.avatar}
                        source={require('./images/face.png')}
                     />
                  </View>
                  <Text style={styles.name}>Lena</Text>
               </View>
               <TouchableOpacity 
                  onPress={() => onShowInfo('Редактирование аккаунта')}
               >
                  <Image 
                     style={styles.fix}
                     source={require('./images/pen.png')}
                  />
               </TouchableOpacity>
            </View>

            {/* info */}
            <View style={info.blockInfo}>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('Мои заказы')}
               >
                  <Text style={info.textInfo}>Мои заказы</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('Мои отзывы и вопросы')}
               >
                  <Text style={info.textInfo}>Мои отзывы и вопросы</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('Уведомления')}
               >
                  <Text style={info.textInfo}>Уведомления</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('Информация для клиента')}
               >
                  <Text style={info.textInfo}>Информация для клиента</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('Настройки')}
               >
                  <Text style={info.textInfo}>Настройки</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('Выйти')}
               >
                  <Text style={info.textInfo}>Выйти</Text>
               </TouchableOpacity>
            </View>

            {/* networks */}
            <NetWorks/>
         </View>
         
         {/* Регистрация */}
         <View style={[styles.registration, {display: showRegistartion ? 'flex' : 'none'}]}>
            <Registration/>
         </View>
         
      </View>
      
   )
}

const styles = StyleSheet.create({
   account: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50,
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
   registration: {
      width: '100%',
      height: '100%'
   },
   wrapProfile: {
      width: '84%',
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
      marginLeft: 32,
      marginRight: 32,
      marginTop: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   profile: {
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
   },
   wrapAvatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#e9eff1',
      justifyContent: 'center',
      alignItems: 'center'
   },
   avatar: {
      width: 30,
      height: 30
   },
   name: {
      fontSize:20,
      color: '#454545',
      fontWeight: 500,
      marginLeft: 14
   },
   fix: {
      width: 30,
      height: 30
   }
})

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