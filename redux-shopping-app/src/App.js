import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

function App() {
  const islogin = useSelector(state => state.auth.islogin);
  // console.log(islogin);
  const cartItems = useSelector(state => state.cart.itemsList);
  // console.log(cartItems);
  return (
    <div className="App">
      {!islogin && <Auth />}
      {islogin && <Layout />}
    </div>
  );
}

export default App;
