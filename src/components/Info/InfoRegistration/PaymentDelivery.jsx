import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

export default function PaymentDelivery() {
  return (
    <View style={styles.paymentDelivery}>
      <ScrollView showsVerticalScrollIndicator={false}>
         <Text style={styles.title}>Варианты оплаты</Text>
         <Text>
            {`
   -  Курьеру при получении. Заказ можно оплатить курьеру при получении (наличными)
   -  Пластиковой карточкой VISA / MASTERCARD / MAESTRO через сервис электронных платежей ASSIST, которая предлагает 2 варианта оплаты, в том числе ЕРИП
   -  Наложенный платеж Оплата при получении в почтовом отделении. Почта взимает комиссию от 1% до 3% в зависимости от суммы наложенного платежа (стоимости заказа).`}
         </Text>
         <Text style={styles.title}>Варианты доставки</Text>
         <Text style={{marginBottom: 30}}>
            {`
   Акция! Бесплатная доставка почтой при заказе от 199 руб!

   -  Доставка Почтой. Стоимость - 6 руб. При оплате в отделении - почта берет комисcию 1-3% от суммы заказа. Если оплатить заранее - комиссии не будет. Сроки доставки - 1-4 дня.
   -  Доставка курьером до двери (без примерки). Стоимость - 9 руб. Без комиссии. Сроки доставки - 1-4 дня.
         
   Обратите внимание:
   Все сроки доставки указаны с момента отправки посылки!
   Если Ваша модель изготавливается по заказу - срок доставки будет рассчитываться индивидуально.
            `}
         </Text>
      </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
   paymentDelivery: {
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

})