import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Linking } from 'react-native'

export default function OfferAgreement() {
  return (
    <View style={styles.offerAgreement}>
      <ScrollView showsVerticalScrollIndicator={false}>
         <Text style={styles.title}>Договор публичной оферты</Text>
         <Text style={{marginBottom: 30}}>
            {`
      Настоящий Публичный договор (далее по тексту «Договор») определяет порядок продажи товаров через Интернет-магазин www.q5.by, именуемый в дальнейшем Интернет-магазин q5.by, принадлежащий OOO "Ты прекрасна". Свидетельство о регистрации 0180437 от 14.04.2022г. выданное Администрацией Московского р-на г. Бреста, Покупателю, принявшему (акцептовавшему) публичное предложение (оферту) о заключении настоящего Договора. Договор может быть изменен без предварительного уведомления. Текущая версия договора доступна по адресу
            `}
            <TouchableOpacity
               onPress={() => Linking.openURL('https://www.q5.by/dogovor')} 
            ><Text style={styles.text}>https://www.q5.by/dogovor</Text></TouchableOpacity>
   {`
      Договор предлагается на условиях публичной оферты согласно ст.407 Гражданского кодекса Республики Беларусь. В частности, размещение текста публичного договора на официальном сайте www.q5.by является предложением, адресованным неопределенному кругу лиц с целью заключить договор на указанных в предложении условиях с любым, кто обратится.
      Лицо, производящее акцепт этой оферты становится Покупателем. Оплачивая товар через сайт www.q5.by, Покупатель принимает и соглашается со всеми условиями, изложенными в настоящем договоре и с информацией, размещенной на сайте Продавца в момент оплаты товара.
      Фактом принятия (акцепта) Покупателем условий настоящего Договора является размещение заказа на сайте интернет-магазина www.q5.by (п. 3 ст. 408 Гражданского кодекса Республики Беларусь).
      Интернет-магазин www.q5.by действует в соответствии с Гражданским кодексом Республики Беларусь, Законом Республики Беларусь «О защите прав потребителей» и иным законодательством Республики Беларусь.
      При приобретении Товара в интернет-магазине за Покупателем сохраняются все права, гарантированные Законом Республики Беларусь «О защите прав потребителей».

      1. ПРЕДМЕТ ДОГОВОРА
      1.1. Продавец, на основании поступившего заказа от Покупателя, продает, а Покупатель производит оплату и принимает заказанный Товар на условиях настоящего Договора.
      1.2. Заказ товара осуществляется по электронной форме (через Корзину), размещенной на сайте www.q5.by.
      1.3. Товар представлен на Сайте через фото-образцы. Каждый фото-образец сопровождается текстовой информацией: артикулом, ценой и описанием товара. Фото-образец может отличаться от реального внешнего вида товара (Производитель товара произвел редизайн Товара, монитор Покупателя искажает цвета и т.д.)
      1.4. По просьбе Покупателя Продавец обязан предоставить (по телефону или посредством электронной почты) прочую информацию, необходимую и достаточную, с точки зрения Покупателя, для принятия им решения о покупке товара.

      2. РАЗМЕЩЕНИЕ ЗАКАЗА
      2.1. Заказ Товара осуществляется Покупателем на интернет-сайте Продавца www.q5.by путем добавления Товара в корзину.
      2.2. При размещении Заказа на интернет-сайте Продавца, Покупатель самостоятельно заполняет всю информацию, указанную в корзине/регистрационной форме.
      2.3. Покупатель обязуется предоставить следующую информацию о себе: фамилия, имя, отчество (на русском языке); фактический адрес доставки; почтовый адрес места жительства (включая индекс); адрес электронной почты; контактные телефоны и иную информацию, указанную в корзине/регистрационной форме. Продавец обязуется не сообщать регистрационные данные Покупателя на интернет-сайте www.q5.by, а также иную информацию, касающуюся личных данных Покупателя, лицам, не имеющим отношения к исполнению Заказа.
      2.4. Покупатель несёт ответственность за содержание и достоверность информации, предоставленной при размещении Заказа и при осуществлении покупки.
      2.5. Все информационные материалы, представленные на интернет-сайте www.q5.by, носят справочный характер и не могут в полной мере передавать достоверную информацию об определенных свойствах и характеристиках Товара. В случае возникновения у Покупателя вопросов, касающихся свойств и характеристик Товара, перед размещением Заказа ему необходимо обратиться за консультацией к Продавцу по указанным в настоящем договоре телефонам или послать запрос на адрес электронной почты info@q5.by либо воспользоваться формой «Обратной связи».
      2.6. Факт оформления заказа Покупателем является безоговорочным фактом принятия Покупателем условий данного Договора.

      3. ИСПОЛНЕНИЕ ЗАКАЗА
      3.1. Продавец обязуется исполнить Заказ в срок, указанный на сайте (в зависимости от способа доставки) после акцепта (подтверждения Покупателем совершенного Заказа). В исключительных случаях срок исполнения Заказа может быть оговорен с Покупателем индивидуально, согласно п.3.6. настоящего Договора.
      3.1.1. Товар имеющийся в наличии доставляется Покупателю силами Продавца за счет Покупателя:
      -в города Республики Беларусь по тарифам РУП «Белпочта» на дату отправки в течение 3-6 рабочих дней с даты отправки, после подтверждения заказа покупателем;
      -в города Российской Федерации:
      по тарифам ФГУП Почта России на дату отправки. Отправка по почте осуществляется еженедельно в пятницу и среду;
      по тарифам транспортной компании СДЭК отправка осуществляется в каждый будний день.
      Товар имеющийся в наличии резервируется для Покупателя на срок не более 2-х рабочих дней. Если в указанный в настоящем пункте срок клиент не ответил на телефонные звонки на указанный при оформлении заказа тел.номер и не ответил на эл.письмо, отправленное на указанный при оформлении заказа эл.ящик (e-mail), резерв снимается и Товар поступает в свободную продажу.
      3.1.2. Товар, имеющий статус «Под заказ» доставляется Покупателю в указанный срок при наличии Товара на складе Производителя Товара. Так, при поступлении Заказа имеющего статус «Под заказ (указан срок поставки)» на склад Продавца, доставка осуществляется согласно п.3.1.1. настоящего Договора.
      3.2.3. В случае отсутствия Товара на складе Производителя Товара, Продавец информирует Покупателя (по телефону или на контактный e-mail) об этом и сообщает новый срок исполнения Заказа. Покупатель вправе в одностороннем порядке отказаться от Заказа в случае изменения срока поставки более чем на 14 календарных дней.
      3.2. Доставка Заказа осуществляется по фактическому адресу, указанному Покупателем при оформлении заказа на Интернет-сайте www.q5.by.
      3.3. Заказ считается исполненным:
      — с момента передачи Заказа Покупателю сотрудником РУП «Белпочта» в почтовом отделении согласно фактическому адресу проживания, указанному Покупателем в Заказе.
      — с момента передачи Заказа Покупателю сотрудником транспортной компании СДЭК по фактическому адресу доставки, указанному Покупателем в Заказе либо в пункте выдачи заказов транспортной компании СДЭК.
      — с момента передачи Заказа Покупателю ФГУП Почта России в почтовом отделении согласно фактическому адресу проживания, указанному Покупателем в Заказе.
      При получении заказа Покупатель обязан в присутствии сотрудника почт. отделения либо сотрудника курьерской службы доставки (в зависимости от выбранной доставки) проверить целостность упаковки посылки. В случае нарушения целостности посылки Покупатель обязан потребовать от сотрудника почт.отделения либо сотрудника курьерской службы доставки составить Акт о повреждении посылки. Только при наличии Акта о повреждении посылки Покупатель имеет право на возмещение стоимости модели и стоимости доставки.
      Расписываясь в получении Заказа, Покупатель подтверждает его исполнение.
      3.4. Право собственности на Заказ, переходит к Покупателю в момент передачи Товара. Риск случайной гибели или случайного повреждения Товара несет Покупатель с момента получения Товара.
      3.5. В случае предоставления Покупателем недостоверной информации о его контактных данных, адресе доставки Заказа или его количестве, Продавец за ненадлежащее исполнение Заказа ответственности не несет.
      3.6. Стоимость и условия доставки Заказа Покупатель уточняет на интернет-сайте Продавца www.q5.by или по телефону: +375 29 733 25 55, +7 495 481 33 50.
      3.7. Перед поставкой заказанного Покупателем товара Продавец имеет право потребовать от Покупателя 100 % предоплаты заказанного товара. Продавец имеет право отказать Покупателю в доставке товара при отсутствии такой оплаты.

      4. ОПЛАТА ЗАКАЗА
      4.1. Оплата Заказа осуществляется способами, указанными на сайте Продавца.
      4.2. Цена на каждую позицию Товара отображена в белорусских рублях на интернет-сайте www.q5.by. Также есть возможность увидеть цену на интересующую модель в российских рублях и долларах США, выбрав нужную валюту.
      4.3. Цены на любые позиции Заказа, указанные на интернет-сайте, могут быть изменены Продавцом в одностороннем порядке без уведомления Покупателя.
      4.4. Форма оплаты Заказа:
      а) наличная для Республики Беларусь и Российской Федерации— оплата при получении заказа в почтовом отделении по месту нахождения Покупателя при получении Товара либо оплата курьеру при получении заказа;
      б) безналичная
      — для Республики Беларусь: Оплата через платежную систему Assist, которая предлагает два варианта оплаты, в том числе ЕРИП.
      — для Российской Федерации: Оплата через платежную систему Assist,
      Оплата через сервисы Сбербанка,
      Оплата в терминале или салонах связи,
      Оплата через Альфа-клик.
      Оплата Яндекс-деньгами,
      Оплата на наши банковские реквизиты в любом банке
      4.5. Счет, выставленный на эл.адрес (e-mail) действителен в течение двух дней. Если заказ не оплачен в этот срок, то резерв на модели снимается и они поступают в свободную продажу.

      5. КАЧЕСТВО, ВОЗВРАТ И ОБМЕН ЗАКАЗА
      5.1. Качество, комплектность товара должны соответствовать требованиям действующих технических нормативных правовых актов (ТНПА) предприятия-изготовителя.
      5.2. Продавец обязан передать Покупателю Товар, который полностью соответствует его Заказу, качество которого соответствует информации, представленной Покупателю при заключении договора, а также информации, доведенной до его сведения при передаче Товара (на этикетке или вкладыше, прикрепленных к Товару или его упаковке, либо другими способами, предусмотренными для отдельных видов Товаров).
      5.3. Вернуть и обменять Товар можно в течение 14 календарных дней с момента получения Товара (см.вкладку «Возврат» на сайте www.q5.by). Возврат денежных средств за не подошедшую модель осуществляется в соответствии с товарным чеком. Возврат стоимости доставки не производится.
      5.4. Изделия бывшие в употреблении, с пятнами и запахом пота, сигарет и проч. к возврату не принимаются. На изделии должны быть сохранены все бирки и наклейки, предусмотренные производителем.
      5.5. Покупатель, которому передан Товар ненадлежащего качества, если его недостатки не были оговорены Продавцом, вправе потребовать замены такого Товара товаром надлежащего качества в течении четырнадцати дней с даты предъявления указанного требования.
      5.6. До заключения настоящего договора Покупатель ознакомился с нормативными правовыми актами Республики Беларусь, регламентирующими розничную торговлю по образцам, текстом настоящего договора, а также информацией о приобретаемом товаре.
      В момент заключения настоящего договора покупатель подтверждает обладание достаточной информации о товаре, о порядке торговли по образцам и соглашается со всеми условиями настоящего договора, без каких-либо оговорок и (или) изъятий из него.

      6. ПРАВА, ОБЯЗАННОСТИ И ОТВЕТСТВЕННОСТЬ СТОРОН ПО ДОГОВОРУ
      6.1. Настоящая оферта не является безотзывной, Продавец имеет право отказать в размещении Заказа лицам, выражающим несогласие с условиями настоящего договора.
      6.2. Покупатель обязуется не использовать Товар, заказанный на интернет-сайте Продавца, в предпринимательских целях.
      6.3. В случае неисполнения или ненадлежащего исполнения обязательств по договору покупатель и(или) пользователь несет ответственность согласно действующему законодательству Республики Беларусь.
      6.4. Споры и разногласия, которые могут возникнуть в связи с исполнением настоящего договора, будут разрешаться путем переговоров между Сторонами.
      6.5. Продавец не несет ответственности за действия или бездействия сотрудников РУП «Белпочта», сотрудников транспортной компании СДЭК и сотрудников ФГУП Почта России и почтовых служб; за убытки Покупателя, возникшие в результате допущенных ошибок при заполнении формы Заказа или при регистрации; в результате неправомерных действий третьих лиц, а также за ненадлежащее использование Покупателем Товаров, заказанных на интернет-сайте Продавца www.q5.by.
      6.6. Покупатель возмещает Продавцу стоимость доставки Товара в случае отказа от получения отправленного заказа.
      Если Покупатель произвел предоплату и не забрал отправленный Товар, предоплата не возвращается в сумме фактических затрат Продавца на отправку Товара к Покупателю и обратно.
      6.7. Продавец не несет ответственности перед Покупателем, если последний не забрал Товар в срок бесплатного хранения товара в почтовом отделении или у транспортной компании.
      6.8. Продавец не несет ответственности за перерывы в предоставлении услуг, вызванные техническими перебоями в работе оборудования и программного обеспечения.
      6.9. Признание судом какого-либо положения Оферты недействительным или не подлежащим принудительному исполнению не влечет недействительности или неисполнимости иных положений Оферты.
      6.10. Покупатель или любое иное лицо нарушившее положения пунктов 9 "Права на торговые марки, товарные знаки, авторские права" и 11 "Пользователь и посетители обязуется", несет наказание согласно законодательства Республики Беларусь, а также возмещает в 10 кратном размере среднерыночную стоимость контента(фото, видео, текстовая информация) который подвергся копированию и(или) другому действию, согласно пункта 11.1. Также владелец сайта www.q5.by в праве требовать возмещение и репутационных потерь от такой деятельности.

      7. ПЕРСОНАЛЬНЫЕ ДАННЫЕ
      7.1. Стороны безоговорочно соглашаются под реквизитами Покупателя считать информацию, указанную им при оформлении заказа на покупку товаров в интернет-магазине www.q5.by.
      7.2. Осуществляя Заказ Товара на Интернет-сайте www.q5.by, Покупатель дает согласие на сбор и обработку персональных данных о себе в целях осуществления доставки заказанного Товара и исполнения условий настоящего договора. Продавец собирает и обрабатывает персональные данные Покупателей (а именно: фамилия, имя, отчество Покупателя; адрес доставки; контактные телефоны и пр.) в целях:
      — выполнения условий настоящего Договора;
      — доставки Покупателю заказанного Товара.
      — возврата Покупателю средств за не подошедшую модель.
      Продавец обязуется: соблюдать конфиденциальность в отношении персональных данных Покупателей; не допускать попытки несанкционированного использования персональных данных Покупателей третьими лицами; исключить доступ к персональным данным Покупателей, лиц, не имеющих непосредственного отношения к исполнению Заказов, за исключением лиц, имеющих права доступа к данной информации в соответствии с законодательством.
      Покупатель дает согласие на получение рекламной информации посредством электросвязи и (или) электронной почты. Покупатель вправе отказаться от получения вышеуказанных сообщений путем направления Продавцу заказного письма с соответствующим письменным уведомлением.
      Для контроля качества обслуживания - ведутся записи всех телефонных разговоров.

      8. УСЛОВИЯ ВОЗВРАТА И ОБМЕНА ТОВАРА
      8.1. Возврат товара надлежащего качества:
      8.1.1. При возврате товара надлежащего качества OOO "Ты прекрасна" вернет его стоимость не позднее чем через 10 дней с момента получения товара и Вашего письменного заявления, за исключением транспортных расходов на доставку товара.
      8.1.2. Возврату не подлежат товары надлежащего качества:
      Имеющие индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его покупателем;
      Указанные в Перечне непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену, Согласно законодательства РБ.
      8.1.3. При отказе от товара, в случае если он является частью комплекта, возврат может осуществляться только полным комплектом.
      8.1.4. Возврат товара возможен на усмотрение продавца. Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид (упаковка, пломбы, ярлыки), потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара. Покупатель предоставляет копии указанных документов и заполняет заявление на возврат.

      8.2. Возврат товара ненадлежащего качества:
      8.2.1. Под товаром ненадлежащего качества подразумевается товар, который неисправен и не может обеспечить исполнение своих функциональных качеств. Отличие элементов дизайна (цвета) или оформления от заявленных в описании на сайте не является неисправностью или не функциональностью товара. Внешний вид и комплектность товара, а также комплектность всего заказа должны быть проверены Получателем в момент доставки товара. В случае обнаружения каких-либо указанных выше недостатков должен быть составлен АКТ в присутствии курьера или сотрудника РУП Белпочта, или сотрудника ФГУП Почта России, или сотрудника транспортной компании СДЭК, осуществляющей доставку товара Покупателю, по возможности, сделаны фотографии недостатков. Указанные документа (акт, фотографии) должны быть направлены на электронный адрес: info@q5.by.
      После получения заказа претензии к внешним дефектам товара, его количеству, комплектности и товарному виду не принимаются.
      8.2.2. Для возврата товара, а также в случае предъявления претензий к качеству товара необходимо:
      - заполнить заявление на возврат, подробно указав, какой именно дефект содержит возвращаемый Вами товар (форму заявления см. на сайте во вкладке «Возврат»);
      - аккуратно упаковать товар к возврату, вложить товарный чек, заполненное заявление, прозрачный пакет, в котором была модель и вешалку;
      8.3. Товар возвращается Покупателем самостоятельно по адресу: Беларусь, г. Брест, ул. Ясеневая, д. 5/2 к. 41 (индекс 224022), компания ООО "Ты прекрасна".
      8.4. Требования о возврате уплаченной за товар денежной суммы подлежат удовлетворению в течение 10 дней со дня предъявления соответствующего требования (закон «О защите прав потребителей»). При возврате товара надлежащего качества возвращается сумма данного товара, а в случае возврата товара ненадлежащего качества возвращается стоимость товара вместе со стоимостью доставки, при условии наличия Акта, составленного в присутствии сотрудника службы доставки (РУП Белпочта, ФГУП Почта России или транспортной компании СДЭК). В противном случае ни товар не принимается к возврату, ни доставка не возмещается.
      8.5. Непосредственный возврат денежных средств
      - для жителей Республики Беларусь осуществляется на банковскую карточку (если заказ был оплачен международной карточкой) или почтовым переводом (если заказ был оплачен через ЕРИП или при получении)
      - для жителей Российской Федерации осуществляется на банковскую карточку.

      8.8. После получения заказа претензии к внешним дефектам товара, его количеству, комплектности и товарному виду не принимаются.
      8.9. Все вопросы по качеству товара принимаются по адресу электронной почты: info@q5.by

      9. Права на торговые марки, товарные знаки, авторские права.
      9.1. Все торговые марки, товарные знаки являются собственностью их владельцев.
      9.2. Продавец является владельцем авторских прав на дизайн, программное обеспечение сайта www.q5.by.
      9.3. Любое воспроизведение материалов сайта www.q5.by без письменного разрешения Продавца запрещено.

      10. Информация о товарах
      10.1. Под информацией о товарах понимаются характеристики, описания, параметры, изображения, цены потребительских товаров.

      11. Пользователь и посетители обязуется
      11.1. Воздерживаться от копирования, а также от воспроизведения, изменения, дополнения, распространения (включая публичную демонстрацию), использования в коммерческих либо иных целях содержимого сайта www.q5.by (либо любой его части), а также воздерживаться от создания на его (ее) основе производных объектов без предварительного письменного разрешения Продавца.
      11.2. Не использовать приборов либо компьютерных программ для вмешательства или попытки вмешательства в процесс нормального функционирования сайта www.q5.by.
      11.3. При оформлении заказа и регистрации на сайте предоставлять данные о себе, которые не должны:
      быть ложными, неточными или вводящими в заблуждение;
      содержать компьютерные вирусы, а также иные компьютерные программы, направленные, в частности, на нанесение вреда, неуполномоченное вторжение, тайный перехват либо присвоение данных любой системы либо самой системы, либо ее части, либо личной информации или иных данных;
      иным образом нарушать действующее законодательство РБ.

      12. Продавец обязуется  
      12.1. Предоставлять Покупателю доступ к предназначенной для всеобщего обозрения информации о товарах, размещаемых на сайте www.q5.by.
      12.2. При совершении Пользователем заказа товара, осуществить обработку информации и обеспечить передачу товара Покупателю на условиях настоящей Оферты.
      Обращаем ваше внимание, что вся информация размещенная на нашем сайте носит ознакомительный характер и не является рекламой.
   `}
         </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   offerAgreement: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20
   },
   title: {
      marginTop: 20,
      marginRight: 'auto',
      marginLeft: 'auto',
      fontWeight: 700,
      fontSize: 20,
      color: '#454545'
   },
   text: {
      color: 'blue',
      textDecorationLine: 'underline',
   }
})