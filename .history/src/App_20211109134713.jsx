import React from 'react';
import './App.css';
import data from "./data";

function App() {
  return (
    <p>
      <div className="image-container">
      {data.map((image) => {
        return (
      <img className="image" src={image.src} alt="" />
      )}
      )}
      </div>
    </p>
  );
}

export default App;
