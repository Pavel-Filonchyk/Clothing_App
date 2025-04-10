import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

import Record from '../../components/Registration/Record'
import PasswordRecovery from '../../components/Registration/PasswordRecovery'

import PaymentDelivery from '../../components/Info/InfoRegistration/PaymentDelivery'
import OfferAgreement from '../../components/Info/InfoRegistration/OfferAgreement'
import Return from '../../components/Info/InfoRegistration/Return'
import Contact from '../../components/Info/InfoRegistration/Contact'
import Support from '../../components/Info/InfoRegistration/Support'
import InfoAccount from '../../components/Info/InfoAccaunt/InfoAccount'
import ReviewsQuestions from '../../components/Info/InfoAccaunt/ReviewsQuestions'
import InfoBlock from '../../components/Info/InfoBlock'

export default function Info() {
   const navigate = useNavigate()

   const info = useSelector(({infoReducer: { info }}) => info)

   return (
      <View style={styles.info}>
         <View style={styles.wrapTitle} >
            <TouchableOpacity onPress={() => navigate('/account')}>
               <Image 
                  style={styles.arrowLeft}
                  source={require('./images/arrowLeft.png')}
               />
            </TouchableOpacity>
            <Text style={styles.title}>{info}</Text>
            <View style={{width: 60}}/>
         </View>

         {/* Регистрация */}
         <View style={{display: info === 'Регистрация аккаунта' ? 'flex' : 'none', width: '100%'}}>
            <Record/>
         </View>
         <View style={{display: info === 'Восстановление пароля' ? 'flex' : 'none', width: '100%'}}>
            <PasswordRecovery/>
         </View>
         <View style={{display: info === 'Оплата и доставка' ? 'flex' : 'none'}}>
            <PaymentDelivery/>
         </View>
         <View style={{display: info === 'Возврат' ? 'flex' : 'none'}}>
            <Return/>
         </View>
         <View style={{display: info === 'Договор публичной оферты' ? 'flex' : 'none'}}>
            <OfferAgreement/>
         </View>
         <View style={{display: info === 'Контакты' ? 'flex' : 'none'}}>
            <Contact/>
         </View>
         <View style={{display: info === 'Связаться с поддержкой' ? 'flex' : 'none'}}>
            <Support/>
         </View>

         {/* Аккаунт */}
         <View style={{display: info === 'Мои заказы' ? 'flex' : 'none'}}>
            <InfoAccount/>
         </View>
         <View style={{display: info === 'Мои отзывы и вопросы' ? 'flex' : 'none'}}>
            <ReviewsQuestions/>
         </View>
         <View style={{display: info === 'Уведомления' ? 'flex' : 'none'}}>
            <InfoAccount/>
         </View>
         <View style={{display: info === 'Информация для клиента' ? 'flex' : 'none', width: '100%'}}>
            <InfoBlock/>
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   info: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50,
      width: '100%'
   },
   wrapTitle: {
      width: '100%',
      height: 38,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
  }
})