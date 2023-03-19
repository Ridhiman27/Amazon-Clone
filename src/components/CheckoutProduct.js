import '../styles/CheckoutProduct.css';
import BasketContext from "../context/BasketContext"
import { useContext } from 'react';

const CheckoutProduct = (props) => {
    const context = useContext(BasketContext);
    const  {reducer} = context;
    const removeFromBasket = (e)=>{
        const action = 'REMOVE_FROM_BASKET';
        let state =  {
          id:props.id,
        //   title:props.title,
        //   image: props.image,
        //   price: props.price,
        //   rating: props.rating
        };
        reducer(action,state);
        e.preventDefault();
    };
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={props.image} alt="Loading" />

        <div className="checkoutProduct__info">

            <p className='checkoutProduct__title'>
                {props.title}
            </p>

            <p className='checkoutProduct__price'>
                <small>$</small>
                {props.price}
            </p>

            <div className="checkoutProduct__rating">
            {
            Array(props.rating)
                .fill()
                .map(() => (
                <p>🌟</p>
                ))}
            </div>
            <button type='button' onClick={removeFromBasket}>Remove form Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
