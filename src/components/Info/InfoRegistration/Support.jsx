import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Linking, Platform } from 'react-native'

export default function Support() {
  return (
     <View style={styles.support}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{width: '100%'}}>
            <Text style={styles.title}>Контакт центр</Text>
         </View>
         
         <TouchableOpacity 
            style={{marginTop: 10}}
            onPress={() => Linking.openURL(Platform.OS !== 'android' ? 'telprompt:+375297332555' : 'tel:+375297332555')}
         >
            <Text style={styles.phoneNumber}>+375(29) 733-25-55</Text>
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => Linking.openURL(Platform.OS !== 'android' ? 'telprompt:+74954813350' : 'tel:+74954813350')}
         >
            <Text style={styles.phoneNumber}>+7 495 481 33 50</Text>
         </TouchableOpacity>
         <Text>    (для звонков из РФ и Казахстана)</Text>
         <Text>
            {
            `
      E-mail: info@q5.by

      Пн - Вс  8:30 - 17:30 по MCK
            `}
         </Text>
         <View style={styles.wrapBtn}>
            <TouchableOpacity 
               style={styles.btn}
               onPress={() => Linking.openURL('viber://add?number=375297332555')} 
            >
               <Text style={styles.textBtn}>Написать в Viber</Text>                            
            </TouchableOpacity>
         </View>
         <View style={styles.wrapBtn}>
            <TouchableOpacity 
               style={styles.btn}
               onPress={() => Linking.openURL('tg://msg?text=Привет&to=375297332555')}
            >
               <Text style={styles.textBtn}>Написать в Telegram</Text>                            
            </TouchableOpacity>
         </View>
         <View style={styles.wrapBtn}>
            <TouchableOpacity 
               style={styles.btn}
               onPress={() => Linking.openURL('whatsapp://send?phone=+375297332555&text=Привет')}
            >
               <Text style={styles.textBtn}>Написать в WhatsApp</Text>                            
            </TouchableOpacity>
         </View>
      </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
   support: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
   },
   title: {
      marginTop: 25,
      marginRight: 'auto',
      marginLeft: 'auto',
      fontWeight: 600,
      fontSize: 16,
      
   },
   phoneNumber: {
      fontWeight: 600,
      textDecorationLine: 'underline',
      marginTop: 10,
      marginLeft: 20
   },
   wrapBtn: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto'
   },
   btn: {
      minWidth: '100%',
      height: 55,
      backgroundColor: '#fafafa',
      fontSize: 16,
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'center'
   },
   textBtn: {
      fontSize: 16,
      color: '#454545',
   },
})