import React from 'react';
import './App.css';
import data from "./data";

function App() {
  return (
    <div>
      <div className="image-container">
      {data.map((image) => {
        return (
          <div className="image-wrap">
          <img className="image" src={image.src} alt="" />
          </div>
      )}
      )}
      </div>

      <div className="image-zoom"></div>
    </div>
  );
}

export default App;
