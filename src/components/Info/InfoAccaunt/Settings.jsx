import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Switch, ScrollView, Linking } from 'react-native'
import Flag from 'react-native-flags'
export default function Settings() {

   const [currency, setCurrency] = useState('BYN')
   const [subscription, setSubscription] = useState(true)
   const [serviceMessages, setServiceMessages] = useState(true)

  return (
    <View style={styles.settings}>
      <ScrollView showsVerticalScrollIndicator={false}>
         <Text style={styles.title}>Настройки аккаунта</Text>
         <TouchableOpacity style={styles.blockFlags}
            //onPress={() => onShowInfo('')}
         >
            <Text style={styles.textInfo}>Валюта</Text>
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
         <View style={[styles.settingItem, {height: 96}]}>
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
      height: 64,
      marginTop: 20,
      borderBottomWidth: 1,
      borderColor: '#e9eff1',
    },
})