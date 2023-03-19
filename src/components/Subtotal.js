import { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import "../styles/Subtotal.css";
import BasketContext from "../context/BasketContext";
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
  const context = useContext(BasketContext);
  const  {basket,getBasketTotal} = context;

  const history = useHistory();

  return (
    <div className='subtotal'>
      <CurrencyFormat
       renderText={(value)=>(
        <>
        <p>
            Subtotal ({basket?.length} items): 
            <strong>
              {value}
            </strong>
        </p>
        <small className='subtotal-gift'>
            <input type="checkbox" />This order contains a gift
        </small>
        </>
       )}
       decimalScale={2}
       value = {getBasketTotal}
       displayType={"text"}
       prefix={"$"}
      />
      <button onClick={e => history.push('/payment')}>Proceed To Checkbox</button>
    </div>
  )
}

export default Subtotal
