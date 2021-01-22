// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName="chicken karachi"  sweetdish="kheer"/>
      <hr/>
      <Dinner dishName="chicken qorma"  sweetdish="jalabi"/>
      <hr/>
      <Dinner dishName="chicken tandori"  sweetdish="rasgulla"/>
    </div>
  );
}

export default App;
