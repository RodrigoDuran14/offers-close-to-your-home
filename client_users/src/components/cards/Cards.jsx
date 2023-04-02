import React, {useEffect} from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import {getAllProducts} from '../../redux/actions'


const Cards = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {products?.map((product) => {
        return (
          <Card
          producto = {product}
          />
        );
      })}
    </div>
  );
};

export default Cards;
