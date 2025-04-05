import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native'

import Registration from './Registration'

export default function Account() {

   const [showRegistartion, setShowRegistration] = useState(true)

   return (
      <View style={styles.account}>
         <Text style={{display: showRegistartion ? 'none' : 'flex'}}>Account</Text>
         <Registration/>
      </View>
      
   )
}

const styles = StyleSheet.create({
   account: {
      flex: 1,
      alignItems: 'center',
   },

})