// OLD WAYS TO USE REDUX

// import { createStore } from 'redux';

// const rerducerFn = (state = { counter: 0 }, action) => {
//   if (action.type === 'INC') {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === 'DEC') {
//     return { counter: state.counter - 1 };
//   }
//   if (action.type === 'ADD') {
//     return {
//       counter: state.counter + action.payload,
//     };
//   }
//   return state;
// };

// const store = createStore(rerducerFn);

// export default store;

// NEW WAYS TO USE REDUX

import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
