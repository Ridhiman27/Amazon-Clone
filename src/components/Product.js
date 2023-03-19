import React from 'react'
import { useContext } from 'react';
import "../styles/Product.css"
import BasketContext from "../context/BasketContext"

const Product = (props) => {

  const context = useContext(BasketContext);
  const  {reducer} = context;
 
  const addToBasket = (e)=>{
      const action = 'ADD_TO_BASKET';
      let state =  {
        id:props.id,
        title:props.title,
        image: props.image,
        price: props.price,
        rating: props.rating
      };
    reducer(action,state);
    e.preventDefault();
  };

  return (
    <div className='product'>
      <div className="product-info">
        <p>{props.title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
        {
        Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <br />
      <br />
      <img src= {props.image} alt="Loading" />

      <button type='button' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
