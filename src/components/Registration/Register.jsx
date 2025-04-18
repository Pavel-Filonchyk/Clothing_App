import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView, Alert} from 'react-native'

import { sendRegister, resetRegister } from '../../core/actions/loginAction'

export default function Register() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)       
   const currency = useSelector(({loginReducer: { currency }}) => currency)

   const [errorPassword, setErrorPassword] = useState('')

   useEffect(() => {
      if(statusRegister === 'Пользователь с такой почтой уже есть на сайте'){
         Alert.alert('Пользователь с такой почтой уже существует')
         dispatch(resetRegister())
      }
      if(statusRegister === 'Пользователь успешно зарегистрирован на сайте'){
         Alert.alert('Вы успешно зарегистрированы')
         navigate('/account')
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

   const onSubmit = (arg) => {
      if(arg.password !== arg.doublePassword){
         setErrorPassword('Пароли не совпадают, повторите их ввод!')
      }else{
         dispatch(sendRegister({
            "action": "register",
            "name": arg.name,
            "email": arg.email,
            "password": arg.password,
            "valuta": currency
         }))
      }
   }

  return (
   <View style={styles.record}>
      <Text style={styles.titleInput}>Регистрация</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
         <Formik
            initialValues={{name: '', email: '', password: '', doublePassword: ''}}
            onSubmit={values => onSubmit(values)}
            validate={values => {
               const errors = {}
               if (!values.name){errors.name = 'Введите Ваше имя'}
               else if (!/^\S+@\S+\.\S+$/.test(values.email)){
                  errors.email = 'Некорректный email'
               }
               if (!values.email) errors.email = 'Введите Email'
               if (!values.password) errors.password = 'Введите Пароль'
               if (!values.doublePassword) errors.doublePassword = 'Повторите Пароль'
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
                  {touched.name && errors.name && (<Text style={styles.error}>{errors.name}</Text>)}
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
                  <TextInput
                     placeholder="Повторите Пароль"
                     onChangeText={handleChange('doublePassword')}
                     value={values.doublePassword}
                     style={styles.textInput}
                  />
                  {touched.doublePassword && errors.doublePassword && (<Text style={styles.error}>{errors.doublePassword}</Text>)}
                  <Text style={styles.error}>{errorPassword}</Text>
                  <TouchableOpacity 
                     style={styles.btn}
                     onPress={handleSubmit}
                  >
                     <Text style={styles.textBtn}>Зарегистрироваться</Text>                            
                  </TouchableOpacity>
               </>
            )}
         </Formik>
      </ScrollView>
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
