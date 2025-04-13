import React from 'react'
import {Provider} from 'react-redux'
import store from './src/core/store'
import { View } from 'react-native'
import { NativeRouter, Route, Routes } from "react-router-native"

import Main from './src/screens/Main/Main'
import Catalog from './src/screens/Catalog/Catalog'
import Subcatalog from './src/screens/Catalog/Subcatalog'
import List from './src/screens/Catalog/List'
import Like from './src/screens/Like/Like'
import Card from './src/screens/Card/Card'
import Account from './src/screens/Account/Account'
import Info from './src/screens/Account/Info'
import Footer from './src/components/Footer/Footer'

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={{flex: 1}}>
          <Routes>
            {/* catalog */}
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/subcatalog" element={<Subcatalog/>}/>
            <Route path="/list" element={<List/>}/>

            <Route path="/" element={<Main/>}/>
            <Route path="/like" element={<Like/>}/>
            <Route path="/card" element={<Card/>}/>

            {/* account */}
            <Route path="/account" element={<Account/>}/>
            <Route path="/info" element={<Info/>}/>
          </Routes>
          <Footer/>
        </View>
      </NativeRouter>
    </Provider>
  )
}


