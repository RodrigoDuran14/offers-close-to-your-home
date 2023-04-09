import React from 'react'
import CardsCategory from '../../components/cardsCategory/CardsCategory';
import Slider from '../../components/slider/Slider';


function HomePrincipal() {
  return (
    <div>
        <div style={{margin:"100px"}}><Slider/></div>
        <div><CardsCategory /></div>
    </div>
  )
};

export default HomePrincipal;