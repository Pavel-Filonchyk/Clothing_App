import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

import Record from '../../components/Registration/Record'
import PasswordRecovery from '../../components/Registration/PasswordRecovery'
import PaymentDelivery from '../../components/Info/PaymentDelivery'
import OfferAgreement from '../../components/Info/OfferAgreement'
import Return from '../../components/Info/Return'
import Contact from '../../components/Info/Contact'
import Support from '../../components/Info/Support'

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
         </View>
         <View style={{display: info === 'registration' ? 'flex' : 'none', width: '100%'}}>
            <Record/>
         </View>
         <View style={{display: info === 'forgot password' ? 'flex' : 'none', width: '100%'}}>
            <PasswordRecovery/>
         </View>
         <View style={{display: info === 'payment and delivery' ? 'flex' : 'none'}}>
            <PaymentDelivery/>
         </View>
         <View style={{display: info === 'return' ? 'flex' : 'none'}}>
            <Return/>
         </View>
         <View style={{display: info === 'offer agreement' ? 'flex' : 'none'}}>
            <OfferAgreement/>
         </View>
         <View style={{display: info === 'contact' ? 'flex' : 'none'}}>
            <Contact/>
         </View>
         <View style={{display: info === 'support' ? 'flex' : 'none'}}>
            <Support/>
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
      borderBottomWidth: 1,
      borderColor: 'darkgray',
   },
   arrowLeft: {
      width: 32,
      height: 28,
      marginLeft: 16
  }
})