import React from 'react'
import MainPage from './swiz/Pages/MainPage'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import ProductsMenu from './swiz/components/ProductsMenu'

const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/products/:firmId/:firmName' element={<ProductsMenu/>}/>
    </Routes>
    </div>
  )
}

export default App
