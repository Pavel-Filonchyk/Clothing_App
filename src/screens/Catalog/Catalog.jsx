import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'

import { getList } from '../../core/actions/getListAction'

export default function Catalog() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [news, setNews] = useState(false)
    const [catalog, setCatalog] = useState(false)
    const [office, setOffice] = useState(false)
    const [pop, setPop] = useState(false)
    const [discount, setDiscount] = useState(false)
    const [done, setDone] = useState(false)

    const showCatalog = () => {

    }
    
    const onCatalog = (arg) => {
        dispatch(getList(arg))
        navigate('/list')
    }

    const arrowTop = <Image style={styles.arrow} source={require('./images/arrowTop.png')}/>
    const arrowBottom = <Image style={styles.arrow} source={require('./images/arrowBottom.png')}/>

    return (
        <View style={styles.catalog}>
            <ScrollView>
                {/* news */}
                <TouchableOpacity style={styles.block}
                    onPress={() => setNews(item => !item)}
                >
                    <View style={{width: 48, height: 44, marginRight: 10}}>
                        <Image 
                            style={styles.img}
                            source={require('./images/new.png')}
                        />
                        </View>
                    <Text style={styles.text}>Новинки недели</Text>
                    {
                        news ? arrowTop : arrowBottom
                    }
                </TouchableOpacity>
                {/* news */}
                <View style={{display: news ? 'flex' : 'none'}}>
                    <TouchableOpacity
                        onPress={() => onCatalog('BEAUTY ANNETE')}
                    ><Text style={styles.textList}>BEAUTY ANNETE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('KIVVIWEAR')}
                    ><Text style={styles.textList}>KIVVIWEAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Galanteya')}
                    ><Text style={styles.textList}>Galanteya</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('MIXAN')}
                    ><Text style={styles.textList}>MIXAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('EOLA')}
                    ><Text style={styles.textList}>EOLA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Beautiful&Free')}
                    ><Text style={styles.textList}>Beautiful&Free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Beautiful&Free')}
                    ><Text style={styles.textList}>Beautiful&Free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text style={styles.textList}>Все новинки</Text></TouchableOpacity>
                </View>
                {/* catalog */}
                <TouchableOpacity style={styles.block}
                    onPress={() => setCatalog(item => !item)}
                >
                    <View style={{width: 48, height: 40, marginRight: 10}}>
                        <Image 
                            style={{width: 36, height: 40}}
                            source={require('./images/list.png')}
                        />
                    </View>
                    <Text style={styles.text}>Каталог одежды</Text>
                    {
                        catalog ? arrowTop : arrowBottom
                    }
                </TouchableOpacity>
                {/* catalog */}
                <View style={{display: catalog ? 'flex' : 'none'}}>
                    <TouchableOpacity
                        onPress={() => onCatalog('Блузки, туники, рубашки')}
                    ><Text style={styles.textList}>Блузки, туники, рубашки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Брюки')}
                    ><Text style={styles.textList}>Брюки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Верхняя одежда')}
                    ><Text style={styles.textList}>Верхняя одежда</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Джемперы, свитеры, кофты, худи')}
                    ><Text style={styles.textList}>Джемперы, свитеры, кофты, худи</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Домашняя одежда')}
                    ><Text style={styles.textList}>Домашняя одежда</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Жакеты (пиджаки)')}
                    ><Text style={styles.textList}>Жакеты (пиджаки)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Жилетки')}
                    ><Text style={styles.textList}>Жилетки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Кардиганы')}
                    ><Text style={styles.textList}>Кардиганы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Комбинезоны')}
                    ><Text style={styles.textList}>Комбинезоны</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Костюмы (комплекты)')}
                    ><Text style={styles.textList}>Костюмы (комплекты)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Платья')}
                    ><Text style={styles.textList}>Платья</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Спортивные костюмы')}
                    ><Text style={styles.textList}>Спортивные костюмы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Шорты')}
                    ><Text style={styles.textList}>Шорты</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Юбки')}
                    ><Text style={styles.textList}>Юбки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Весь каталог')}
                    ><Text style={styles.textList}>Весь каталог</Text>
                    </TouchableOpacity>
                </View>
                {/* office */}
                <TouchableOpacity style={styles.block}
                    onPress={() => setOffice(item => !item)}
                >
                    <View style={{width: 48, height: 38, marginRight: 10}}>
                        <Image 
                            style={{width: 36, height: 36}}
                            source={require('./images/office.png')}
                        />
                        </View>
                    <Text style={styles.text}>Одежда для офиса</Text>
                    {
                        office ? arrowTop : arrowBottom
                    }
                </TouchableOpacity>
                {/* office */}
                <View style={{display: office ? 'flex' : 'none'}}>
                    <TouchableOpacity
                        onPress={() => onCatalog('Офисные платья')}
                    ><Text style={styles.textList}>Офисные платья</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Офисные костюмы')}
                    ><Text style={styles.textList}>Офисные костюмы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Блузки для офиса')}
                    ><Text style={styles.textList}>Блузки для офиса</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Юбки для офиса')}
                    ><Text style={styles.textList}>Юбки для офиса</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Брюки для офиса')}
                    ><Text style={styles.textList}>Брюки для офиса</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Вся одежда для офиса')}
                    ><Text style={styles.textList}>Вся одежда для офиса</Text>
                    </TouchableOpacity>
                </View>
                {/* pop */}
                <TouchableOpacity style={styles.block}
                    onPress={() => setPop(item => !item)}
                >
                    <View style={{width: 48, height: 38, marginRight: 10}}>
                        <Image 
                            style={{width: 36, height: 36}}
                            source={require('./images/pop.png')}
                        />
                    </View>
                    <Text style={styles.text}>Популярные брэнды</Text>
                    {
                        pop ? arrowTop : arrowBottom
                    }
                </TouchableOpacity>
                {/* pop */}
                <View style={{display: pop ? 'flex' : 'none'}}>
                    <TouchableOpacity
                        onPress={() => onCatalog('Michel Chic')}
                    ><Text style={styles.textList}>Michel Chic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('БелЭльСтиль')}
                    ><Text style={styles.textList}>БелЭльСтиль</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Vittoria Queen')}
                    ><Text style={styles.textList}>Vittoria Queen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Элль-Стиль')}
                    ><Text style={styles.textList}>Элль-Стиль</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Swallow')}
                    ><Text style={styles.textList}>Swallow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('NINELE (Нинель Шик )')}
                    ><Text style={styles.textList}>NINELE (Нинель Шик )</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Anelli')}
                    ><Text style={styles.textList}>Anelli</Text>
                    </TouchableOpacity>
                </View>
                {/* discount */}
                <TouchableOpacity style={styles.block}
                    onPress={() => setDiscount(item => !item)}
                >
                    <View style={{width: 48, height: 44, marginRight: 10}}>
                        <Image 
                            style={styles.img}
                            source={require('./images/%.png')}
                        />
                    </View>
                    <Text style={styles.text}>Скидки</Text>
                    {
                        discount ? arrowTop : arrowBottom
                    }
                </TouchableOpacity>
                {/* discount */}
                <View style={{display: discount ? 'flex' : 'none'}}>
                    <TouchableOpacity
                        onPress={() => onCatalog('С любой скидкой')}
                    ><Text style={styles.textList}>С любой скидкой</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Скидка более 20%')}
                    ><Text style={styles.textList}>Скидка более 20%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Скидка более 30%')}
                    ><Text style={styles.textList}>Скидка более 30%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Скидка более 50%')}
                    ><Text style={styles.textList}>Скидка более 50%</Text>
                    </TouchableOpacity>
                </View>
                {/* done */}
                <TouchableOpacity style={styles.block}
                    onPress={() => setDone(item => !item)}
                >
                    <View style={{width: 48, height: 38, marginRight: 10}}>
                        <Image 
                            style={{width: 36, height: 36}}
                            source={require('./images/done.png')}
                        />
                    </View>
                    <Text style={styles.text}>Доступно всем</Text>
                    {
                        done ? arrowTop : arrowBottom
                    }
                </TouchableOpacity>
                {/* done */}
                <View style={{display: done ? 'flex' : 'none'}}>
                    <TouchableOpacity
                        onPress={() => onCatalog('Платья до 100 руб')}
                    ><Text style={styles.textList}>Платья до 100 руб</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onCatalog('Костюмы до 120 руб')}
                    ><Text style={styles.textList}>Костюмы до 120 руб</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => onCatalog('Блузки до 60 руб')}
                    ><Text style={styles.textList}>Блузки до 60 руб</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.block}
                    onPress={() => onCatalog('Премиум сегмент')}
                >
                    <View style={{width: 48, height: 40, marginRight: 10}}>
                        <Image 
                            style={{width: 36, height: 36}}
                            source={require('./images/premium.png')}
                        />
                    </View>
                    <Text style={styles.text}>Премиум сегмент</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}
                    onPress={() => onCatalog('Молодежная мода')}
                >
                    <View style={{width: 48, height: 44, marginRight: 10}}>
                        <Image 
                            style={styles.img}
                            source={require('./images/fashion.png')}
                        />
                    </View>
                    <Text style={styles.text}>Молодежная мода</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}
                    onPress={() => onCatalog('Большие размеры')}
                >
                    <View style={{width: 48, height: 44, marginRight: 10}}>
                        <Image 
                            style={{width: 36, height: 44}}
                            source={require('./images/bigSize.png')}
                        />
                    </View>
                    <Text style={styles.text}>Большие размеры</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}
                    onPress={() => onCatalog('Нарядные')}
                >
                    <View style={{width: 48, height: 44, marginRight: 10}}>
                        <Image 
                            style={{width: 40, height: 44}}
                            source={require('./images/beauti.png')}
                        />
                    </View>
                    <Text style={styles.text}>Нарядные</Text>
                </TouchableOpacity>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    catalog: {
        flex: 1,
        marginTop: 68
        //justifyContent: 'center'
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54,
        marginLeft: 30,
    },
    img: {
        width: 40,
        height: 40
    },
    text: {
        fontSize: 19,
        fontWeight: 800,
        color: '#454545'
    },
    textList: {
        fontSize: 17,
        fontWeight: 800,
        color: '#454545',
        marginLeft: 88,
        lineHeight: 30
    },
    arrow: {
        width: 34,
        height: 34,
        position: 'absolute',
        right: 26

    }
})


