import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Cards from '../../component/cards/Cards'
import { getProducts } from '../../redux/actions'



function Home () {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProducts())
  },[])
  
  const { products } = useSelector(state => state)
  console.log(products);
  
  return (
    <div>
      <Cards products={products}/>
    </div>
  )
}

export default Home
