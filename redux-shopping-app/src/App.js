import React, { useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/Notification';
import { uiActions } from './store/ui-slice';
import { fetchData, sendCartData } from './store/cart-actions';

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const islogin = useSelector(state => state.auth.islogin);
  // console.log(islogin);
  // const cartItems = useSelector(state => state.cart.itemsList);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  // console.log(cartItems);
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!islogin && <Auth />}
      {islogin && <Layout />}
    </div>
  );
}

export default App;
