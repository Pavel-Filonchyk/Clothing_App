import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Linking } from 'react-native'

export default function Return() {
  return (
    <View style={styles.return}>
      <ScrollView>
         <Text style={styles.title}>Возврат</Text>
         <Text style={{marginBottom: 30}}>
            {`
            Если изделие по какой-то причине Вам не подошло, то вы можете его легко вернуть или обменять на любое другое в течение 14-ти дней после получения.

            Вы должны знать:
            - бывшие в употреблении изделия к возврату не принимаются.
            - на изделии должны быть сохранены все бирки и наклейки.
            - должны быть соблюдены сроки возврата товара.
            - возврат средств происходит в течение 7 календарных дней с момента получения Вашей посылки. Если оплачивали предварительно, то при возврате деньги возвращаются на карту с которой происходила оплата.

            Как сделать возврат:
            - заполнить заявление.`} 
            <TouchableOpacity
               onPress={() => Linking.openURL('https://www.q5.by/documents/bel.pdf')} 
            ><Text style={styles.text}> - Скачать: заявление для ВОЗВРАТА</Text>
            </TouchableOpacity> 
            <TouchableOpacity
               onPress={() => Linking.openURL('https://www.q5.by/documents/obmen.pdf')} 
            ><Text style={styles.text}> - Скачать: заявление для ОБМЕНА</Text>
            </TouchableOpacity> 
            {
            `\n(Его можно распечатать и заполнить или просто написать от руки)
            - отправить товар вместе с заявлением обратно к нам обычной почтой на адрес: г. Брест, 224701, Привокзальная площадь 1, в компанию ООО "Ты прекрасна".

            Обратите внимание: возвраты, присланные нам без заявления или наложенным платежом по почте, мы не имеем права забирать!
            Интернет-магазин не возмещает стоимость пересылки возвращаемого товара
            `}
         </Text>
      </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
   return: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20
   },
   title: {
      marginTop: 25,
      marginRight: 'auto',
      marginLeft: 'auto',
      fontWeight: 600,
      fontSize: 16,
      
   },
   text: {
      color: 'blue',
      textDecorationLine: 'underline',
   }
})