import React from 'react';
import './App.css';
import data from "./data";

function App() {
  return (
    <p>
      <img src={data[1].images} alt="" />
    </p>
  );
}

export default App;
