import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native'
import Flag from 'react-native-flags'

import { changeAccount, resetRegister } from '../../../core/actions/loginAction'

export default function EditAccount() {
   const dispatch = useDispatch()

   const dataAccount = useSelector(({loginReducer: { dataAccount }}) => dataAccount)
   const statusRegister = useSelector(({loginReducer: { statusRegister }}) => statusRegister)

   const [phone, setPhone] = useState('+375')

   const onSubmit = (arg) => {
      const editData = {
         "action": "edit",
         "client_id": dataAccount?.client_id,
         "name": arg.name,
         "email": arg.email,
         "phone": `${phone}${arg.phone}`,
         "address": arg.address,
         "password": dataAccount?.password
      }
      dispatch(changeAccount(editData))
   }
   useEffect(() => {
      if(statusRegister === 'Данные клиента успешно обновлены'){
         Alert.alert('Ваши данные успешно обновлены')
         dispatch(resetRegister())
      }
   }, [statusRegister])
   return (
      <View style={styles.settings}>
         <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
            <Formik
               initialValues={{name: dataAccount?.name, email: dataAccount?.email, phone: dataAccount?.phone, address: dataAccount?.address}}
               onSubmit={values => onSubmit(values)}
               validate={values => {
                  const errors = {}
                  const phoneRegex = /^[0-9]+$/
                  if (!values.name) errors.name = 'Введите Имя'
                  if (!values.email) errors.email = 'Введите Email'
                  else if (!/^\S+@\S+\.\S+$/.test(values.email)){
                     errors.email = 'Некорректный email'
                  }
                  if (!values.phone) errors.phone = 'Введите Телефон'
                  // else if (!phoneRegex.test(values.phone)) {
                  //    errors.phone = 'Только цифры (0-9)'
                  // }
                  if (!values.address) errors.address = 'Введите Адрес'
                  return errors
               }}
            >
               {({ handleChange, handleSubmit, values, errors, touched }) => (
                  <>
                     <TextInput
                        placeholder="Имя"
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
                     <View style={styles.wrapPhone}>
                        <TouchableOpacity 
                           onPress={() => setPhone(prev => prev === '+375' ? '+7' : '+375')}
                           style={{width: '28%'}}
                        >
                           <View style={{flexDirection: 'row', alignItems: 'center'}}>
                              <Flag 
                                 code={phone === '+375' ? 'BY' : 'RU'} 
                                 size={32} 
                              />
                              <Text style={{marginLeft: 8, color: '#454545'}}>
                                 {phone === '+375' ? '+375' : '+7'}
                              </Text>
                           </View>
                        </TouchableOpacity>
                        <TextInput
                           placeholder="Телефон"
                           onChangeText={handleChange('phone')}
                           value={values.phone}
                           style={styles.phoneInput}
                        />
                     </View>
                     
                     {touched.phone && errors.phone && (<Text style={styles.error}>{errors.phone}</Text>)}
                     <TextInput
                        placeholder="Адрес"
                        onChangeText={handleChange('address')}
                        value={values.address}
                        style={styles.textInput}
                     />
                     {touched.address && errors.address && (<Text style={styles.error}>{errors.address}</Text>)}
                     <TouchableOpacity 
                        style={styles.btn}
                        onPress={handleSubmit}
                     >
                        <Text style={styles.textBtn}>Сохранить изменения</Text>                            
                     </TouchableOpacity>
                     <TouchableOpacity 
                        style={styles.btn}
                        //onPress={changePassword}
                     >
                        <Text style={styles.textBtn}>Изменить пароль</Text>                            
                     </TouchableOpacity>
                  </>
               )}
            </Formik>
         </ScrollView>
      </View>
  )                                                         
}

const styles = StyleSheet.create({
   settings: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingLeft: 32,
      paddingRight: 32,
      marginTop: 16
   },
   wrapPhone : {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60, 
      minWidth: '100%',
      borderColor: '#e9eff1', 
      borderWidth: 1,
      marginTop: 20,
      paddingLeft: 18,
   },
   textInput: {
      height: 60, 
      minWidth: '100%',
      borderColor: '#e9eff1', 
      borderWidth: 1,
      fontSize: 16,
      marginTop: 20,
      paddingLeft: 18,
      color: '#454545',
   },
   phoneInput: {
      width: '70%',
      height: 58,
      borderLeftWidth: 1, 
      borderColor: '#e9eff1', 
      marginLeft: 10,
      paddingLeft: 8,
      fontSize: 16,
      color: '#454545',
   },
   error: {
      color: 'red', 
      fontSize: 12,
      marginTop: 4,
      marginLeft: 8
   },
   btn: {
      minWidth: '100%',
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