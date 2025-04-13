import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { useNavigate } from 'react-router-native'

import { changeNamePage } from '../../core/actions/stylesAction'
import { changeInfo } from '../../core/actions/infoAction'

export default function Footer() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const namePage = useSelector(({stylesReducer: { namePage }}) => namePage)

	const onChangePage = (arg) => {
		dispatch(changeNamePage(arg))
		if (arg === 'main') {
			navigate('/')
		}else{
			navigate(`/${arg}`)
		}
	}
	
	return (
		<View style={styles.footer}>
			<TouchableOpacity 
				style={styles.container}
				onPress={() => onChangePage('catalog')}
			>
				{
					namePage === 'catalog' ? 
						<Image 
							style={styles.btnFooter}
							source={require('./images/listBlack.png')}
						/>
					:   <Image 
							style={styles.btnFooter}
							source={require('./images/listGray.png')}
						/>
				}
				<Text style={{color: namePage === 'list' ? '#454545' : "#b5bbbd", fontSize: 10, fontWeight: '600'}}>
					Каталог
				</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={styles.container}
				onPress={() => onChangePage('main')}
			>
				{
					namePage === 'main' ? 
						<Image 
							style={styles.btnFooter}
							source={require('./images/mainBlack.png')}
						/>
					:   <Image 
							style={styles.btnFooter}
							source={require('./images/mainGray.png')}
						/>
				}
				<Text style={{color: namePage === 'main' ? '#454545' : "#b5bbbd", fontSize: 10, fontWeight: '600'}}>
					Главная
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onChangePage('like')}
				style={styles.container}
			>
				{
					namePage === 'like' ? 
						<Image 
							style={styles.btnFooter}
							source={require('./images/heartBlack.png')}
						/>
					:   <Image 
							style={styles.btnFooter}
							source={require('./images/heartGray.png')}
						/>
				}
				<Text style={{color: namePage === 'like' ? '#454545' : "#b5bbbd", fontSize: 10, fontWeight: '600'}}>
					Избранные
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onChangePage('card')}
				style={styles.container}
			>
				{
					namePage === 'card' ? 
						<Image 
							style={styles.btnFooter}
							source={require('./images/cardBlack.png')}
						/>
					:   <Image 
							style={styles.btnFooter}
							source={require('./images/cardGray.png')}
						/>
				}
				<Text style={{color: namePage === 'card' ? '#454545' : "#b5bbbd", fontSize: 10, fontWeight: '600'}}>
					Корзина
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => onChangePage('account')}
				style={styles.container}
			>
				{
					namePage === 'account' ? 
						<Image 
							style={styles.btnFooter}
							source={require('./images/accountBlack.png')}
						/>
					:   <Image 
							style={styles.btnFooter}
							source={require('./images/accountGray.png')}
						/>
				}
				<Text style={{color: namePage === 'account' ? '#454545' : "#b5bbbd", fontSize: 10, fontWeight: '600'}}>
					Аккаунт
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	footer: {
		width: '100%',
		height: '10%',
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'fixed'
	},
	container: {
		alignItems: 'center',
	},
	text: {
		fontSize: 12,
	},
	btnFooter: {
		height: 28,
		width: 28,
		marginBottom: 5
	}
})
