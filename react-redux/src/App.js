import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    // dispatch({ type: 'INC' });
    dispatch(actions.increment());
  };
  const decrement = () => {
    // dispatch({ type: 'DEC' });
    dispatch(actions.decrement());
  };
  const addBy = () => {
    // dispatch({ type: 'ADD', payload: 10 });
    dispatch(actions.addBy(20));
  };
  return (
    <div className="App">
      {counter}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add 10</button>
      {/* <Auth /> */}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
