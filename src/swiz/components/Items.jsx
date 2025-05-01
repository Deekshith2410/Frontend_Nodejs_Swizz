import React, { useState } from 'react'
import { foodData } from '../food'

const Items = () => {
    const [displayItem, setDisplayItem]= useState(foodData)

   console.log("this is daata" ,displayItem)
    
  return (
   <div className='foodsection'>
     {displayItem.map((item)=>{
        return(
            <div className="galary" >
            <img src={item.food_img} alt={item.food_img}></img>
                
            </div>
     )
     })}
   </div>
  )
}

export default Items
