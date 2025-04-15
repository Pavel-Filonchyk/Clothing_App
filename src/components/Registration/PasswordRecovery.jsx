import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, Alert } from 'react-native'

import { sendRegister, resetRegister } from '../../core/actions/loginAction'

export default function PasswordRecovery() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)

   useEffect(() => {
      if(statusRegister === 'Клиент с такой почтой не зарегистрирован на сайте' || statusRegister === 'Адрес электронной почты некорректен'){
         Alert.alert(statusRegister)
         dispatch(resetRegister())
      }
      if(statusRegister === 'Пароль успешно отправлен на почту клиента'){
         Alert.alert(statusRegister)
         navigate('/account')
         dispatch(resetRegister())
      }
   }, [statusRegister])

   const onSubmit = (arg) => {
      dispatch(sendRegister({
         "action": "remember_pass",
         "email": arg.email
      }))
   }

  return (
   <View style={styles.passwordRecovery}>
      <Text style={styles.titleInput}>Забыли пароль?</Text>
      <Text style={{marginTop: 10}}>Введите ваш email и мы отправим ссылку на восстановление пароля</Text>
      <Formik
         initialValues={{email: ''}}
         onSubmit={values => onSubmit(values)}
         validate={values => {
            const errors = {}
            if (!values.email){errors.email = 'Введите Email'}
            else if (!/^\S+@\S+\.\S+$/.test(values.email)){
               errors.email = 'Некорректный email'
            }
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
               <TouchableOpacity 
                  style={styles.btn}
                  onPress={handleSubmit}
               >
                  <Text style={styles.textBtn}>Продолжить</Text>                            
               </TouchableOpacity>
            </>
         )}
      </Formik>
   </View>
  )
}

const styles = StyleSheet.create({
   passwordRecovery: {
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
})
