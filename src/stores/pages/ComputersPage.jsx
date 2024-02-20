import React from 'react';
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';

const ComputersPage = () => {
  return (
    <>
    <Navbar/>
     <div className='pageSection'>
      {
        computerData.map((item)=>{
          return(
            <div>
              <div className='proImg'>
                <img src={item.image} alt=""/>
              </div>
              <div className='proModel'>
                {item.company} {item.model}
              </div>
            </div>
          )
        })
      }
     </div>
    </>
  )
}

export default ComputersPage