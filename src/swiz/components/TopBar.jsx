import React from 'react'
import { Link } from 'react-router-dom'
import ProductMenu from './ProductsMenu'




  const TopBar = ({onSignInClick,onCartClick}) => {
    return (
 
    <section className='Content'>
       <div className='nameLogo'>
        <Link to='/' className='link'>
        <h2>Swizz</h2>
        </Link>
       </div>

       <div className='searchBar'>
       <i class="fas fa-search"></i>

        <input type="text"  placeholder='Search'></input>
       </div>

       <div className='topbar'>
        <button  onClick={onSignInClick}>Sign-In</button>
       </div>
       
       
       <div className="topbar">
      <button className="cartBtn" onClick={onCartClick}>
        🛒 Cart
      </button>
    </div>

    </section>
  )
}
export default TopBar
