import React,{useState} from 'react';
import {mobileData} from "../data/mobiles";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
  const [selectedProduct, setSelectedProduct]=useState([]);
  const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item=>item!==mango))

    }else{
      setSelectedProduct(...selectedProduct,[mango])
    }
  }
  const filteredProduct=selectedProduct.length===0?mobileData : 
  mobileData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar/>
     <div className="fullPage">

   <div className="pro-Selected">
   {
        mobileData.map((phone)=>{
          return(
            <div className='pro-input'>
              <input type="checkbox" 
              checked={selectedProduct.includes(phone.company)}
              onChange={()=>companyHandler(phone.company)}/>
              {phone.company}
            </div>
          )
        })
      }
   </div>
    <div className='pageSection'>
        {
            filteredProduct.map((item)=>{
                return(
                <>
                    <div>
                      <Link to={`/Mobile/${item.id}`}>
                      <div className='pageImg'>
                             <img src={item.image} alt=""/>
                        </div>
                      </Link>
                       
                        <div className="proModel">
                            {item.company},{item.model}
                          </div>
                    </div>
                    
                </>
                )
            })
        }
    </div>
     </div>
    </>
  )
}

export default MobilePage