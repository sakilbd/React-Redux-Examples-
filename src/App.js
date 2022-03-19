
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import { increment } from './actions';
import { decrement } from './actions';




function App() {

const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();
return (
    <div className='App'>
      <h1>Counter {counter}</h1> 
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button  onClick={()=>dispatch(decrement())}>-</button>
      <h3>
      {isLogged ? <h3>Valueable Information I should not see</h3>: 'No Information'}
      </h3>
      
      </div>
    
  );
};


export default App;
