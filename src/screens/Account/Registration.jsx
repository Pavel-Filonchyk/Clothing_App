import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView, Linking } from 'react-native'

import Login from '../../components/Registration/Login'
import { changeInfo } from '../../core/actions/infoAction'

export default function Registration() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const onShowInfo = (arg) => {
      dispatch(changeInfo(arg))
      navigate('/info')
   }

   const openLink = async (url, fallbackUrl) => {
     const supported = await Linking.canOpenURL(url)
     if (supported) {
         await Linking.openURL(url)
      } else if (fallbackUrl) {
         await Linking.openURL(fallbackUrl);
     } else {
         Alert.alert('Ошибка', 'Невозможно открыть ссылку')
     }
   }
   
   return (
      <View style={styles.registration}>
         <View style={styles.wrapTitle} >
            <Text style={styles.title}>Аккаунт</Text>
         </View>
         <ScrollView style={styles.scroll}>
            <Login/>
            <View style={styles.line}/>
            
            {/* info */}
            <View style={info.blockInfo}>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('payment and delivery')}
               >
                  <Text style={info.textInfo}>Оплата и доставка</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('return')}
               >
                  <Text style={info.textInfo}>Возврат</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('contact')}
               >
                  <Text style={info.textInfo}>Контакты</Text>
               </TouchableOpacity>
               <TouchableOpacity style={info.block}
                  onPress={() => onShowInfo('offer agreement')}
               >
                  <Text style={info.textInfo}>Договор публичной оферты</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapBtn}>
               <TouchableOpacity 
                  style={styles.btn}
                  onPress={() => onShowInfo('support')}
               >
                  <Text style={styles.textBtn}>Связаться с поддержкой</Text>                            
               </TouchableOpacity>
            </View>

            {/* networks */}
            <View style={info.wrapNetworks}>
               <TouchableOpacity
                  onPress={() => Linking.openURL('tg://msg?text=Привет&to=375297332555')}
               >
                  <Image style={[info.img, {height: 43, width: 43}]}
                     source={require('./images/telega.png')}
                  />
               </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => openLink('instagram://user?username=q5_official', 'https://instagram.com/q5_official')}
              >
               <Image style={info.img}
                     source={require('./images/insta.png')}
                  />
              </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => openLink('tiktok://user?username=q5.by', 'https://www.tiktok.com/@q5.by')}
               >
                  <Image style={[info.img, {height: 39, width: 39}]}
                     source={require('./images/tik-tok.png')}
                  />
               </TouchableOpacity>
               <TouchableOpacity
                 onPress={() => Linking.openURL('https://www.youtube.com/@-q5by')}
               >
                  <Image style={[info.img, {height: 43, width: 44}]}
                     source={require('./images/youtube.png')}
                  />
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => openLink('ok://group/56631130456180', 'https://ok.ru/group/56631130456180')}
               >
                  <Image style={[info.img, {height: 39, width: 39}]}
                     source={require('./images/ok.png')}
                  />
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
   blockInfo: {
      with: '100%',
      paddingLeft: 32,
      paddingRight: 32,
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