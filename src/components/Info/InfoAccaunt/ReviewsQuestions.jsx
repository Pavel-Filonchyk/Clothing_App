import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Linking } from 'react-native'

export default function ReviewsQuestions() {

   const [pages, setPages] = useState('Все')

   return (
      <View style={styles.reviewsQuestions}>
         <View style={styles.pageSwitcher}>
            <TouchableOpacity style={[styles.switchTextWrapper, {borderBottomWidth: pages === 'Все' ? 1 : 0}]}
               onPress={() => setPages('Все')}
            >
               <Text style={[styles.switchText, {color: pages === 'Все' ? '#454545' : 'darkgray'}]}>Все</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.switchTextWrapper, {borderBottomWidth: pages === 'Отзывы' ? 1 : 0}]}
               onPress={() => setPages('Отзывы')}
            >
               <Text style={[styles.switchText, {color: pages === 'Отзывы' ? '#454545' : 'darkgray'}]}>Отзывы</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.switchTextWrapper, {borderBottomWidth: pages === 'Вопросы' ? 1 : 0}]}
               onPress={() => setPages('Вопросы')}
            >
               <Text style={[styles.switchText, {color: pages === 'Вопросы' ? '#454545' : 'darkgray'}]}>Вопросы</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.pageWrapper}>
            <Text style={styles.text}>Список пуст</Text>
         </View>
      </View>
      
  )
}

const styles = StyleSheet.create({
   reviewsQuestions: {
      flex: 1,
      width: '100%'
   },
   pageSwitcher: {
      minWidth: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10
   },
   switchTextWrapper: {
      marginLeft: 14,
      height: 26,
      borderColor: '#454545',
   },
   switchText: {
      fontSize: 15.5,
   },
   text: {
      fontSize: 17,
      color: '#454545',
   },

   pageWrapper: {
      minWidth: '100%',
      flex: 1, 
      marginBottom: 60,
      justifyContent: 'center',
      alignItems: 'center'
   }
   
})