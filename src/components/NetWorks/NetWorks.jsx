import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ScrollView, Linking } from 'react-native'

export default function NetWorks() {
   const openLink = async (url, fallbackUrl) => {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
         await Linking.openURL(url)
      } else if (fallbackUrl) {
         await Linking.openURL(fallbackUrl)
      } else {
         Alert.alert('Ошибка', 'Невозможно открыть ссылку')
      }
   }
   return (
      <View style={styles.networks}>
         <TouchableOpacity
            onPress={() => Linking.openURL('tg://msg?text=Привет&to=375297332555')}
         >
            <Image style={[styles.img, {height: 43, width: 43}]}
               source={require('./images/telega.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => openLink('instagram://user?username=q5_official', 'https://instagram.com/q5_official')}
         >
         <Image style={styles.img}
               source={require('./images/insta.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => openLink('tiktok://user?username=q5.by', 'https://www.tiktok.com/@q5.by')}
         >
            <Image style={[styles.img, {height: 39, width: 39}]}
               source={require('./images/tik-tok.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => Linking.openURL('https://www.youtube.com/@-q5by')}
         >
            <Image style={[styles.img, {height: 43, width: 44}]}
               source={require('./images/youtube.png')}
            />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => openLink('ok://group/56631130456180', 'https://ok.ru/group/56631130456180')}
         >
            <Image style={[styles.img, {height: 39, width: 39}]}
               source={require('./images/ok.png')}
            />
         </TouchableOpacity>
      </View>
     
   )
}

const styles = StyleSheet.create({
   networks: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 28,
   },
   img: {
      width: 40,
      height: 40,
      marginLeft: 6,
      marginRight: 6
   }
})