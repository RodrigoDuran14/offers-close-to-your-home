import React,{useEffect} from "react";
import CardsCategory from "../../components/cardsCategory/CardsCategory";
import Carousel from "../../components/carousel/Carousel";

 
 
 function HomePrincipal() {
// 
  return (  
        <div>          
            <Carousel numSlides={5} speed={2000}/>
          
            <CardsCategory />          
        </div>
  );
}

export default HomePrincipal;
