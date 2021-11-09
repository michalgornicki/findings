import React from 'react';
import './App.css';
import data from "./data";

function App() {
  return (
    <p>
      <div className="image-container">
      {data.map((image) => {
        return (
      <img className="image" src={image.src} style={{transform: rotate "90deg"}} alt="" />
      )}
      )}
      </div>
    </p>
  );
}

export default App;
