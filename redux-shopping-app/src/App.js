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
    const sendRequest = async () => {
      const res = await fetch('https://yth2veim6m.hk.aircode.run/redux_tutorial_cart_put', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(cart),
      });
      const data = await res.json();
      console.log(data);
    };
    sendRequest();
    // console.log('cart:', cart);
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
