import { useState } from "react";
import BasketContext from "./BasketContext";

export const BasketState = (props) => {

  const[basket,setBasket] = useState([]);

  const[user,setUser] = useState(0);

  const getBasketTotal = (basket.length!==0)?
  (basket.reduce((total, item) => total += item.price,0)):0

  const reducer = (action, state)=>{
    switch(action){
        case "ADD_TO_BASKET":
          setBasket(basket.concat(state));
          break;
        case "REMOVE_FROM_BASKET":
          const index = basket.findIndex(
            (basketItem)=> basketItem.id === state.id
          )
          let newBasket = basket;
          if(index>=0){
            newBasket.splice(index,1);
          }
          else{
            console.warn(`Cant remove product (id: ${state.id}) as its not in basket`)
          }
          console.log("New Basket"+newBasket);
          setBasket(basket.slice(newBasket));
          break;
        case "SET_USER":
          setUser(state);
          break;
        default:
          return state;
    }
}
  return (
    <BasketContext.Provider value={{basket,user,getBasketTotal,reducer}}>
        {props.children}
    </BasketContext.Provider>
  )
}
