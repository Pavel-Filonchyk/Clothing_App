import React, { useState } from 'react'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Switch, ScrollView, Image } from 'react-native'
import Flag from 'react-native-flags'

export default function EditAccount() {

   const [currency, setCurrency] = useState('+375')

   return (
      <View style={styles.settings}>
         <Formik
            initialValues={{name: '', email: '', phone: '', address: ''}}
            onSubmit={values => onSubmit(values)}
            validate={values => {
               const errors = {}
               if (!values.name) errors.name = 'Введите Имя'
               if (!values.email) errors.email = 'Введите Email'
               if (!values.phone) errors.phone = 'Введите Телефон'
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
                        onPress={() => setCurrency(prev => prev === '+375' ? '+7' : '+375')}
                        style={{width: '28%'}}
                     >
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                           <Flag 
                              code={currency === '+375' ? 'BY' : 'RU'} 
                              size={32} 
                           />
                           <Text style={{marginLeft: 8, color: '#454545'}}>
                              {currency === '+375' ? '+375' : '+7'}
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
                     <Text style={styles.textBtn}>Изменить пароль</Text>                            
                  </TouchableOpacity>
               </>
            )}
         </Formik>
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