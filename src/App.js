// import logo from './logo.svg';
import React, {useState}   from 'react';
import {Message} from './message.js';
import './App.css';
// import Dinner from './dinner.js';

function App() {
    let [count, setcount] = useState(0);
    let [ismorning, setMorning] =useState (false)
    return (
    <div className ={`box ${ismorning ? 'daylight':'false'}`} >
      <h2>  good { ismorning ? 'Morning': 'night'} </h2>
      <Message counter={count}/>
      <br/>
      <button onClick={
        ()=> setcount(++count)
      }>
        update counter
        </button>

        <button  onClick={()=>setMorning(!ismorning)}> update day   </button>
      
    </div>
  );
}

export default App;
