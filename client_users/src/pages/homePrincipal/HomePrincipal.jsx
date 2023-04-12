import React from "react";
import CardsCategory from "../../components/cardsCategory/CardsCategory";
import Slider from "../../components/slider/Slider";
import Loader from "../../components/loader/loader";
import { useSelector } from "react-redux";

function HomePrincipal() {
  const display = useSelector((state) => state.display);

  return (
    
       
        <div>
          <div
          // style={{margin:"100px"}}
          >
            <Slider />
          </div>
          <div>
            <CardsCategory />
          </div>
        </div>
    
    
  );
}

export default HomePrincipal;
