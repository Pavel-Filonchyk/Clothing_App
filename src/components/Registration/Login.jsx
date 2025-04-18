import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { changeInfo } from '../../core/actions/infoAction'
import { sendRegister, resetRegister } from '../../core/actions/loginAction'

export default function Login() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)
   console.log(statusRegister)
   useEffect(() => {
      if(statusRegister === 'Неверный пароль' || statusRegister === 'Пользователь не найден'){
         Alert.alert(statusRegister)
         dispatch(resetRegister())
      }

      const onConfirmCode = async () => {
         try {
            const jsonValue = JSON.stringify({"id": statusRegister?.client_id, "password": statusRegister?.password})
            await AsyncStorage.setItem('auth', jsonValue)
         } catch (e) {
            console.log(e)
         }
      }
      onConfirmCode()
   }, [statusRegister])
   // client_id: "351004"
   const onSubmit = (arg) => {
      dispatch(sendRegister({
         "action": "login",
         "email": arg.email,
         "password": arg.password
      }))

   }
   
   const onToInfo = (arg) => {
      dispatch(changeInfo({page: arg, move: 'add'}))
      navigate('/info')
   }

   return (
   <View style={styles.login}>
      <Text style={styles.titleInput}>Войти по логину</Text>
      <Formik
         initialValues={{email: '', password: ''}}
         onSubmit={values => onSubmit(values)}
         validate={values => {
            const errors = {}
            if (!values.email){errors.email = 'Введите Email'}
            else if (!/^\S+@\S+\.\S+$/.test(values.email)){
               errors.email = 'Некорректный email'
            }
            if (!values.password) errors.password = 'Введите Пароль'
            return errors
         }}
      >
         {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
               <TextInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  style={styles.textInput}
               />
               {touched.email && errors.email && (<Text style={styles.error}>{errors.email}</Text>)}
               <TextInput
                  placeholder="Пароль"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  style={styles.textInput}
               />
               {touched.password && errors.password && (<Text style={styles.error}>{errors.password}</Text>)}
               <TouchableOpacity onPress={() => onToInfo('Восстановление пароля')} style={styles.wrapForgotPassword}>
                  <Text style={styles.textForgotPassword}>Забыли пароль?</Text>
               </TouchableOpacity>
               
               <TouchableOpacity 
                  style={styles.btn}
                  onPress={handleSubmit}
               >
                  <Text style={styles.textBtn}>Войти</Text>                            
               </TouchableOpacity>
            </>
         )}
      </Formik>
      <TouchableOpacity onPress={() => onToInfo('Регистрация аккаунта')}>
         <Text style={styles.textRegistration}>Нет аккаунта? <Text style={styles.textForgotPassword}> Зарегистрируйтесь</Text></Text>
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
   login: {
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
      borderColor: '#e9eff1', 
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
