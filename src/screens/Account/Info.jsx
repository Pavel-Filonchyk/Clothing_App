import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

import Register from '../../components/Registration/Register'
import PasswordRecovery from '../../components/Registration/PasswordRecovery'

import PaymentDelivery from '../../components/Info/InfoRegistration/PaymentDelivery'
import OfferAgreement from '../../components/Info/InfoRegistration/OfferAgreement'
import Return from '../../components/Info/InfoRegistration/Return'
import Contact from '../../components/Info/InfoRegistration/Contact'
import Support from '../../components/Info/InfoRegistration/Support'
import InfoAccount from '../../components/Info/InfoAccaunt/InfoAccount'
import ReviewsQuestions from '../../components/Info/InfoAccaunt/ReviewsQuestions'
import EditAccount from '../../components/Info/InfoAccaunt/EditAccount'
import Settings from '../../components/Info/InfoAccaunt/Settings'
import InfoBlock from '../../components/Info/InfoBlock'

import { changeInfo } from '../../core/actions/infoAction'

export default function Info() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const info = useSelector(({infoReducer: { info }}) => info)
   console.log(info)

   const onNavigate = () => {
      dispatch(changeInfo({move: 'delete'}))
      if(info?.length > 1){
         navigate('/info')
      }else{
         navigate('/account')
      }
   }

   return (
      <View style={styles.info}>
         <View style={styles.wrapTitle} >
            <TouchableOpacity onPress={onNavigate}>
               <Image 
                  style={styles.arrowLeft}
                  source={require('./images/arrowLeft.png')}
               />
            </TouchableOpacity>
            <Text style={styles.title}>{info[info.length -1]}</Text>
            <View style={{width: 60}}/>
         </View>

         <View style={{width: '100%'}}>
            {
               // Регистрация
               info[info.length -1] === 'Регистрация аккаунта' ? <Register/>
               : info[info.length -1] === 'Восстановление пароля' ? <PasswordRecovery/>

               // info block
               : info[info.length -1] === 'Оплата и доставка' ? <PaymentDelivery/>
               : info[info.length -1] === 'Возврат' ? <Return/> 
               : info[info.length -1] === 'Договор публичной оферты' ? <OfferAgreement/>
               : info[info.length -1] === 'Контакты' ? <Contact/>
               : info[info.length -1] === 'Связаться с поддержкой' ? <Support/>
               
               // Аккаунт
               : info[info.length -1] === 'Редактирование аккаунта' ? <EditAccount/>
               : info[info.length -1] === 'Мои заказы' ? <InfoAccount/>
               : info[info.length -1] === 'Мои отзывы и вопросы' ? <ReviewsQuestions/>
               : info[info.length -1] === 'Уведомления' ?  <InfoAccount/>
               : info[info.length -1] === 'Настройки' ? <Settings/>
               : info[info.length -1] === 'Информация для клиента' ? <InfoBlock/>
               : ''
            }
            
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   info: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50,
      width: '100%',
   },
   wrapTitle: {
      width: '100%',
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
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