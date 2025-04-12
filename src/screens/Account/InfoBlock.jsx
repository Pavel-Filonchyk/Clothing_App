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
      dispatch(changeInfo(arg))
      navigate('/info')
   }

   const onNavigate = () => {
      navigate('/account')
   }

   return (
      <View style={styles.infoBlock}>
         <View style={[styles.wrapTitle, {display: statusRegister ? 'none' : 'flex'}]} >
            <TouchableOpacity onPress={onNavigate}>
               <Image 
                  style={styles.arrowLeft}
                  source={require('./images/arrowLeft.png')}
               />
            </TouchableOpacity>
            <Text style={styles.title}>Информация для клиента</Text>
            <View style={{width: 60}}/>
         </View>
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
      </View>
   )
}

const styles = StyleSheet.create({
   infoBlock: {
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
  },
  info: {
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