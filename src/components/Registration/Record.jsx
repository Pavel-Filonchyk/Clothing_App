import React, { useState } from 'react'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'

export default function Record() {
  return (
   <View style={styles.record}>
      <Text style={styles.titleInput}>Регистрация</Text>
      <Formik
         initialValues={{name: '', email: '', password: ''}}
         onSubmit={values => console.log(values)}
         validate={values => {
            const errors = {}
            if (!values.name) errors.name = 'Введите Ваше имя'
            if (!values.email) errors.email = 'Введите Email'
            if (!values.password) errors.password = 'Введите Пароль'
            return errors
         }}
      >
         {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
               <TextInput
                  placeholder="Ваше имя"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  style={styles.textInput}
               />
               {touched.email && errors.email && (<Text style={styles.error}>{errors.name}</Text>)}
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
               <TouchableOpacity 
                  style={styles.btn}
                  onPress={handleSubmit}
               >
                  <Text style={styles.textBtn}>Зарегистрироваться</Text>                            
               </TouchableOpacity>
            </>
         )}
      </Formik>
   </View>
  )
}

const styles = StyleSheet.create({
   record: {
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
})
