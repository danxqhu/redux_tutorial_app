import React, { useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart);
  const islogin = useSelector(state => state.auth.islogin);
  // console.log(islogin);
  const cartItems = useSelector(state => state.cart.itemsList);
  useEffect(() => {
    fetch('https://yth2veim6m.hk.aircode.run/redux_tutorial_cart_put', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);
  // console.log(cartItems);
  return (
    <div className="App">
      {!islogin && <Auth />}
      {islogin && <Layout />}
    </div>
  );
}

export default App;
