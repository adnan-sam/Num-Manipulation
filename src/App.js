import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
      <div class="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div class="quantity">
        <a onClick={()=> dispatch(decNumber(5))} class="quantity__minus" title="Decrement"><span>-5</span></a>
        <a onClick={()=> dispatch(decNumber(1))} class="quantity__minus" title="Decrement"><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={myState} />
        <a onClick={()=> dispatch(incNumber(1))} class="quantity__plus" title="Increment"><span>+</span></a>
        <a onClick={()=> dispatch(incNumber(5))} class="quantity__minus" title="Decrement"><span>+5</span></a>
      </div>
      </div>
      </div>
    </>
  )
}

export default App