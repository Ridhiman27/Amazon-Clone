import React , {useContext} from 'react'
import '../styles/Payment.css'
import BasketContext from "../context/BasketContext";
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct'

const Payment = (props) => {
  const context = useContext(BasketContext);
  const  {basket} = context;

  return (
    <div className='payment'>
        <div className="payment__container">
          <h1>Checkout (
            <Link>
              {basket?.length} items
            </Link>
            )</h1>
          {/* Payment section - delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>K.J Somaiya College Of Engineering</p>
              <p>Ghatkopar Mumbai</p>
            </div>
          </div>
          {/* Payment section - Review Items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>
                Review items and delivery
              </h3>
            </div>
            <div className="payment__items">
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
          </div>
          {/* Payment section - Payment method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              {/* stripe api  */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default Payment
