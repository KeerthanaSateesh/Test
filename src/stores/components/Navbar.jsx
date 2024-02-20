import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
    const {cartItems}=useCart()
  return (
    <>
        <div className="navSection">
            <div className="title">
                <h2>E-Mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder='search...'/>
            </div>
            <div className="user">
                <div className="user-detail">
                    SignIN/SignUP
                </div>
                <Link to="/Cart">
                    <div className="cart">Cart
                        <span>{}CartItems.length</span>
                    </div>
                </Link>
               
            </div>
        </div>
        <div className="subMenu">
            <ul>
                <Link to="/mobiles">
                 <li>Mobiles</li>
                </Link>
                <Link to="/Computers">
                    <li>Computers</li>
                </Link>
               
                <Link to="/Men">
                 <li>Man </li>
                </Link>
               <Link to="/Women">
                 <li>Woman</li>
               </Link>
              
                <Link to="/Furniture">
                    <li>Furniture</li>
                </Link>
               <Link to="/Ac">
                 <li>Ac</li>
               </Link>
               
                <Link to="/Watches">
                    <li>Watches</li>
                </Link>
                <Link to="/KitchenItems">
                 <li>Kitchen</li>
                </Link>
               
            </ul>
        </div>
     </>
    
  )
}

export default Navbar