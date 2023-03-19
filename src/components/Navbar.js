import React from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import {useContext } from 'react';
import BasketContext from "../context/BasketContext"
import { auth } from './Config';

const Navbar = () => {
  const context = useContext(BasketContext);
  const {user,basket,reducer} = context;

  const handleAuhthentication = () =>{
    if(user){
      reducer("SET_USER",0);
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Loading" />
      </Link>
      <div className="header-search" >
        <input className="header-searchInput" type="text" />
        <span className="material-icons">search</span>
      </div>
      <div className="header_nav">

        <Link to={!user && '/login'}>
        <div onClick={handleAuhthentication} className="header_option">
          <div className="line1">Hello Guest</div>
          <div className="line2">{user ? 'Sign Out' : 'Sign In'}</div>
        </div>
        </Link>

        <div className="header_option">
          <div className="line1">Returns</div>
          <div className="line2">Orders</div>
        </div>
        <div className="header_option">
          <div className="line1">Your</div>
          <div className="line2">Prime</div>
        </div>
      </div>
      <div className="basketOption">
        <Link to="/basket">
        <span className="material-icons">
            shopping_cart
        </span>
        </Link> 
      </div>
        <div className="header__optionBasket header__basketCount">
        {basket?.length}
        </div>

    </div>

  );
}

export default Navbar;
