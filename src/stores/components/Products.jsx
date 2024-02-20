import React from 'react';
import Mobiles from './Mobies';
import Computers from './Computers';
import Women from './Women';
import Men from './Men';
import Watches from './Watches';
import Furniture from './Furniture';
import Ac from './Ac';
import Kitchen from './Kitchen';

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers/>
      <Men/>
      <Women/>
      <Watches/>
      <Furniture/>
      <Ac/>
      <Kitchen/>
    </div>
  )
}

export default Products