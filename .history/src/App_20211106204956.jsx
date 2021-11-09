import React from 'react';
import './App.css';

function App() {
  return (
    <p>
      {images.map((img, index) => (
        <div>
          <img key={index} src={img} alt={img} />
        </div>
      ))}
    </p>
  );
}

export default App;
