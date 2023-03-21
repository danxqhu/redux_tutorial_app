import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    replaceData(state, action) {
      console.log('action:', action);
      state.totalQuantity = action.payload.result[0].totalQuantity;
      state.itemsList = action.payload.result[0].itemsList;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existngItem = state.itemsList.find(item => item.id === newItem.id);
      // console.log('existngItem:', existngItem, newItem);
      if (existngItem) {
        existngItem.quantity++;
        existngItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      // console.log(action.payload);
      const id = action.payload;
      const existingItem = state.itemsList.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
