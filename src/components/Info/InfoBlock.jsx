import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

import { changeInfo } from '../../core/actions/infoAction'

export default function InfoBlock() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)

   const onShowInfo = (arg) => {
      dispatch(changeInfo({page: arg, move: 'add'}))
      navigate('/info')
   }

   const onNavigate = () => {
      navigate('/account')
   }

   return (
      <View style={styles.info}>
         <TouchableOpacity style={styles.block}
            onPress={() => onShowInfo('Оплата и доставка')}
         >
            <Text style={styles.textInfo}>Оплата и доставка</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.block}
            onPress={() => onShowInfo('Возврат')}
         >
            <Text style={styles.textInfo}>Возврат</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.block}
            onPress={() => onShowInfo('Контакты')}
         >
            <Text style={styles.textInfo}>Контакты</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.block}
            onPress={() => onShowInfo('Договор публичной оферты')}
         >
            <Text style={styles.textInfo}>Договор публичной оферты</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
  info: {
   flex: 1,
   //marginTop: 20,
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
textInfo: {
   fontSize: 17,
   color: '#454545',
},
})