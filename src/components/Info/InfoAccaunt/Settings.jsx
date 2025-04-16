import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Text, Switch, ScrollView, Image, Alert } from 'react-native'
import Flag from 'react-native-flags'

import { deleteAccount, resetRegister, changeCurrency } from '../../../core/actions/loginAction'

export default function Settings() {
   const dispatch = useDispatch()

   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)
   const currency = useSelector(({loginReducer: { currency }}) => currency)
   
   const [valuta, setValuta] = useState('rur')
   const [subscription, setSubscription] = useState(true)
   const [serviceMessages, setServiceMessages] = useState(true)

   useEffect(() => {
      if(statusRegister === 'Пользователь успешно удалён'){
         Alert.alert(statusRegister)
         dispatch(resetRegister())
      }
   }, [statusRegister])

   const onCurrency = () => {
      setValuta(prev => prev === 'rub' ? 'rur' : 'rub')
      dispatch(changeCurrency(valuta))
   }

   const onDeleteAccount = () => {
      Alert.alert(
         "Вы уверены, что хотите удалить аккаунт?",
         "",
         [
           {
               text: "Отмена",
               style: "cancel"
           },
           {
               text: "Удалить",
               style: "destructive",
               onPress: () => dispatch(deleteAccount({
                  "action": "delete_profile",
                  "client_id": "351004"
               }
              ))
           }
         ]
      )
      //client_id: "351026"
      //Пользователь успешно удалён
   }

   return (
      <View style={styles.settings}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Настройки аккаунта</Text>
            <TouchableOpacity style={styles.blockFlags}
               //onPress={() => onShowInfo('')}
            >
               <Text style={styles.textInfo}>Валюта</Text>
               <TouchableOpacity onPress={onCurrency}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                     <Flag 
                        code={currency === 'rub' ? 'BY' : 'RU'} 
                        size={32} 
                     />
                     <Text style={{marginLeft: 8, color: '#454545'}}>
                        {currency === 'rub' ? 'BYN' : 'RUB'}
                     </Text>
                  </View>
               </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.title}>Настройки уведомлений</Text>
            <View style={styles.settingItem}>
               <Text style={styles.textInfo}>Подписка на интересные коллекции и акции</Text>
               <Switch
                  value={subscription}
                  trackColor={{true: '#ff8100'}} 
                  onValueChange={setSubscription}
                  thumbColor={"#FFFFFF"}
               />
            </View>
            <View style={styles.settingItem}>
               <View>
                  <Text style={styles.textInfo}>Сервисные сообщения</Text>
                  <Text style={styles.text}>Уведомления о получении оплаты, отправке и ответах на ваши вопросы о товарах</Text>
               </View>
               <Switch
                  value={serviceMessages}
                  trackColor={{true: '#ff8100'}} 
                  onValueChange={setServiceMessages}
                  thumbColor={"#FFFFFF"}
               />
            </View>
            <View style={[styles.settingItem, {marginTop: 30, alignItems: 'center'}]}>
               <Text style={styles.textInfo}>Удалить аккаунт</Text>
               <TouchableOpacity
                  onPress={onDeleteAccount}
               >
                  <Image 
                     style={styles.delete}
                     source={require('./images/delete.png')}
                  />
               </TouchableOpacity>
            </View>
         </ScrollView>
      </View>
  )                                                         
}

const styles = StyleSheet.create({
   settings: {
      width: '100%',
      alignItems: 'center',
      paddingLeft: 32,
      paddingRight: 32
   },
   title: {
      marginTop: 25,
      fontWeight: 600,
      fontSize: 21,
      color: '#454545'
   },
   blockFlags: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 52,
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
      marginTop: 12
   },
   textInfo: {
      fontSize: 17,
      color: '#454545',
      maxWidth: '80%',
      lineHeight: 24,
   
   },
   text: {
      fontSize: 13,
      color: '#454545',
      maxWidth: '90%',
      marginTop: 4
   },
   settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      paddingBottom: 18,
      marginTop: 20,
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
    },
    delete: {
      width: 28,
      height: 28
    }
})