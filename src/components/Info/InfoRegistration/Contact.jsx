import React from 'react'
import { View, StyleSheet, Text, ScrollView, Linking, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'

export default function Contact() {
  return (
    <View style={styles.contact}>
     
         {/* <Text style={styles.title}>Адрес и время работы:</Text>
         <Text style={{marginBottom: 40}}>
            {`
Беларусь, г. Брест, ул. Ясеневая, д. 5/2 к. 41

График работы:
ежедневно с 8.30 - 17.30 по Минскому (Московскому) времени

`}
<Text style={styles.title}>Наши телефоны:</Text>
{`

+375 29 733 25 55 (Viber, WhatsApp, Telegram)
+7 495 481 33 50 (для звонков из РФ и Казахстана)
Электронная почта:
E-mail: info@q5.by

`}
<Text style={styles.title}>Реквизиты:</Text>
{`

ООО "Ты прекрасна"
УНП 291755406
Реквизиты для оплаты:
В белорусских рублях
Текущий (расчетный счет): BY82ALFA30122C04540010270000 в BYN в ЗАО 'Альфа-Банк', БИК: ALFABY2X

В российских рублях
Текущий (расчетный счет): BY67ALFA30122C04540020270000 в RUB в ЗАО 'Альфа-Банк', БИК: ALFABY2X

В долларах сша
Текущий (расчетный счет): BY52ALFA30122C04540030270000 в USD в ЗАО 'Альфа-Банк', БИК: ALFABY2X

Юридический адрес
Беларусь, г. Брест, ул. Ясеневая, д. 5/2 к. 41 224022
`}
         </Text> */}
      {/* <WebView source={{ uri: 'https://create-site.by' }}/> */}
      <View style={styles.contact}>
      <WebView 
        source={{ uri: 'https://create-site.by' }}
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <Text>Загрузка...</Text>
          </View>
        )}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          console.log('WebView error: ', nativeEvent)
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          console.log('HTTP error: ', nativeEvent.statusCode)
        }}
      />
   </View>


   </View>
  )
}

const styles = StyleSheet.create({
   contact: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20
   },
   title: {
      marginTop: 25,
      fontWeight: 700,
      fontSize: 20,
      color: '#454545'
   },
   webview: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
   },
   loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

})
