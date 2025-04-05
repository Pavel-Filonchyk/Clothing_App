import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

import { changeInfo } from '../../core/actions/infoAction'

export default function Login() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onToInfo = (arg) => {
      dispatch(changeInfo(arg))
      navigate('/info')
   }

   return (
   <View style={styles.login}>
      <Text style={styles.titleInput}>Войти по логину</Text>
      <Formik
         initialValues={{email: '', password: ''}}
         onSubmit={values => console.log(values)}
         validate={values => {
            const errors = {}
            if (!values.email) errors.email = 'Введите Email'
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
               {touched.email && errors.email && (<Text style={styles.error}>{errors.password}</Text>)}
               <TouchableOpacity onPress={() => onToInfo('forgot password')} style={styles.wrapForgotPassword}>
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
      <TouchableOpacity onPress={() => onToInfo('registration')}>
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
      borderColor: 'darkgray', 
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
