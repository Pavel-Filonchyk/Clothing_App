import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Linking } from 'react-native'

export default function InfoAccount() {
  return (
      <View style={styles.infoAccount}>
         <Text style={styles.text}>Список пуст</Text>
      </View>
      
  )
}

const styles = StyleSheet.create({
   infoAccount: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //marginTop: 50,
      width: '100%'
   },
   text: {
      fontSize: 17,
      color: '#454545',
   },
   
})