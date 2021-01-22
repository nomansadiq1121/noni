// import logo from './logo.svg';
import React, {useState}   from 'react';
import './App.css';
// import Dinner from './dinner.js';

function App() {
    let [count, setcount] = useState(1);
    return (
    <div >
      <h3>noman is :{count}</h3>
      <br/>
      <button onClick={
        ()=> alert('button pressed')
      }>
        update counter

      </button>
    </div>
  );
}

export default App;
