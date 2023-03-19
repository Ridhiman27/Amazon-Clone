import Navbar from "./components/Navbar";
import React ,{useContext} from 'react';
import Home from "./components/Home";
import Basket from "./components/Basket";
import { BrowserRouter as Router,
         Switch,
         Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./components/Config";
import BasketContext from "./context/BasketContext";
import Payment from "./components/Payment";

function App() {
  const context = useContext(BasketContext);
  const  {reducer} = context;

  useEffect(()=>{

    // will run only once
      auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ',authUser);

      const action = "SET_USER";
      // let state = 0;
      if(authUser){
        //The user just logged in / the user was logged 
        // state = 1;
        reducer(action,1);
      }
      else{
        //the user is logged out
        // state = 0;
        reducer(action,0);
      }
    })
  })

  return (
    <div className="App">
      {/* Wrapping everything the NoteState so that all the components and sub components can access the states through context api */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/payment">
              <Navbar />
              <Payment/>
            </Route>
            <Route exact path="/basket">
              <Navbar />
              <Basket />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
