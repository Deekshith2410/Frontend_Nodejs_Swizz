import React from 'react'
import TopBar from '../components/TopBar'
import Items from '../components/Items'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductsMenu from '../components/ProductsMenu'
import {Routes,Route} from 'react-router-dom'



const MainPage = () => {
  return (
     <div>
      <TopBar/>
        <div className='landingSection'>
        
      
       <Items/>
        <Chains/> 
        <FirmCollections/>
        </div> 
     
    </div>
     

  )
}

export default MainPage
