import React from 'react';
import './App.css';
import data from "./data";

function App() {
  return (
    <p>
      {data.map((image) => {
        return (
      <img src={data[0].images} alt="" />


      )}
      )}
    </p>
  );
}

export default App;
