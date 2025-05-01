import React, { useEffect, useState } from 'react'
import {API_URL} from '../Pages/api'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Hourglass } from "react-loader-spinner";
import SignIn from './SignInPanel';


const Chains = () => {

  const [vendorData,setvendorData]= useState([]);
  const [scrollPosition, setscrollPosition] = useState(0);
  const [loading,setloading]=useState(true)

  
  const vendorFirmHandler = async()=>{
    try 
    {
       const response= await fetch("https://backend-nodejs-suby.onrender.com/vendor/all-vendors")
       const newData=await response.json()
       setvendorData(newData);
       console.log("this is vendor data , it is working",newData)
       setloading(false)
    } 
    catch (error){
          alert("failed to fetch data")
          console.error ("Error to fetch data")
          setloading(true)
     }
  }
        useEffect(()=>{
          vendorFirmHandler()
        },[])

        const handleScroll=(direction)=>
        {
          const gallery=document.getElementById("chainGalary");
          const scrollAmount=500;

          if(direction==="left")
          {
               gallery.scrollTo({
                left:gallery.scrollLeft-scrollAmount,
                behavior:"smooth"
               })
          }
          else if(direction==="right")
          {
            gallery.scrollTo({
            left:gallery.scrollLeft+scrollAmount,
              behavior:"smooth"
             })
          }
        }
  return (
    <div className='mediaChainSection'>
    <div className='loaderSection'>
    {loading && <>
      <div className='loader'>
        Loading 
      </div>
      <Hourglass
  visible={true}
  height="30"
  width="30"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
  </>
    }
  </div>
   
    <div className='btnscrollsection'>
    <button onClick={()=>handleScroll("left")}><FaArrowLeft className='btn' /></button>
    <button onClick={()=>handleScroll("right")}><FaArrowRight className='btn'/></button>
    </div>
    <h3>Top Restaurants in Hyderabad </h3>
      <section className='chainsection' id="chainGalary" onScroll={(e)=>setscrollPosition(e.target.scrollLeft)}>
          {vendorData.vendors && vendorData.vendors.map((vendor)=>{
            return(
              <>
              <div className='vendorBox'>
               {vendor.firm.map((item)=>{
                return(
                  <>
                    <div>
                     
                    </div>
                    <div className='firmimages'>
                        <img src={`https://backend-nodejs-suby.onrender.com/uploads/${item.image}`}/>
                    </div>
                  </>
                )
               })}
            </div>
              </>
            )
          })}
             
    </section>
    </div>
  )
}

export default Chains
