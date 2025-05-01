import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProductsMenu from '../components/ProductsMenu'
import SignInPanel from './SignInPanel'
import TopBar from './TopBar'

const FirmCollections = () => {

  const [firmData,setfirmData] =useState ([])
  const [selectedRegion,setselectedRegion]=useState('All')
  const [showSignIn, setShowSignIn] = useState(false);
  const firmDataHandler= async()=>{
    try
     {
       const response= await fetch("https://backend-nodejs-suby.onrender.com/vendor/all-vendors")
       const newfirmData= await response.json()
       setfirmData(newfirmData.vendors)

    }
     catch (error) 
     {
        alert("Data is not recognize")
        console.error("firm data is not visible ",error)
    }
  }
      useEffect(()=>{
        firmDataHandler()
      },[]);

      const filterHandler= (region)=>{
        setselectedRegion(region)
      }

  return (
    <>
    <TopBar
       onSignInClick={() => setShowSignIn(true)}
        
      />
      {showSignIn && <SignInPanel onClose={() => setShowSignIn(false)} />}

    <h3> Restaurants with online food delivery in Hyderabad</h3>
    <div className='filterbtn'>
      <button onClick={()=>filterHandler("All")}>All</button>
      <button onClick={()=>filterHandler("south-indian")}>South-indian</button>
      <button onClick={()=>filterHandler("north-indian")}>North-indian</button>
      <button onClick={()=>filterHandler("chinese")}>Chinese</button>
      <button onClick={()=>filterHandler("bakery")}>Bakery</button>
    </div>
      <section className='firmsection'>
        {firmData.map((apple)=>{
          return apple.firm.map((item)=>{
            if(selectedRegion==="All"||
            item.region.includes(selectedRegion.toLowerCase())
            ){
              
                return(
                  <Link to={`/products/${item._id}/${item.firmName}`} className='link'>
                  <div className='firmGroupBox'>
                    <div className='firmGroup'>
                  <img src={`https://backend-nodejs-suby.onrender.com/uploads/${item.image}`}/>
                  <div id='firmoffer'>
                    {item.offer}
                  </div>
                </div>
                  <div className='firmDetails'>
                    <div className='firmName'>
                      {item.firmName}
                    </div>
                    <div className='details'>
                    {item.region.join(' , ')}
                    </div>
                    <div className='details'>
                    {item.area}
                    </div>
                  </div>
                    </div>
                  </Link>
                );
            }
          })
             
          
        })}
      </section>
    </>
  )
}

export default FirmCollections
