import {useContext} from 'react'
import "../styles/Basket.css"
import Subtotal from './Subtotal.js'
import BasketContext from "../context/BasketContext"
import CheckoutProduct from './CheckoutProduct'

const Basket = () => {
  const context = useContext(BasketContext);
  const  {basket} = context;
  return (
    <div className='basket'>
      <div className="basket-left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Loading" className="basket-ad" />
      <h2 className='basket_title'>Your shopping Basket</h2>
      {basket.map(item =>
        <CheckoutProduct
          id = {item.id}
          title = {item.title}
          image = {item.image}
          price = {item.price}
          rating = {item.rating}
        />
        )}
      </div>
      <div className="basket-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Basket
