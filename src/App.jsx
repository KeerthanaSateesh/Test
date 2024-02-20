import React from 'react';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import WatchPage from './stores/pages/WatchPage';
import KitchenPage from './stores/pages/KitchenPage';
import FurniturePage from './stores/pages/FurniturePage';
import MenPage from './stores/pages/MenPage';
import WomenPage from './stores/pages/WomenPage';
import AcPage from './stores/pages/acPage';
import ComputersPage from './stores/pages/ComputersPage';
import MobileSingle from './Singles/MobileSingle';
import UseCart from './stores/UserCart';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={  <LandingPage/>}/>
        <Route path="/mobiles" element={<MobilePage/>}/>
        <Route path="/Watches" element={<WatchPage/>}/>
        <Route path="/KitchenItems" element={<KitchenPage/>}/>
        <Route path="/Furniture" element={<FurniturePage/>}/>
        <Route path="/Men" element={<MenPage/>}/>
        <Route path="/Women" element={<WomenPage/>}/>
        <Route path="/Ac" element={<AcPage/>}/>
        <Route path="/Computers" element={<ComputersPage/>}/>
          <Route path="/Mobile/:id" element={<MobileSingle/>}/>
        <Route path="/Cart" element={<UseCart/>}/>
        

      </Routes>
      
    </div>
  )
}

export default App