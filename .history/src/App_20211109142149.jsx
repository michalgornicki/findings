import React from 'react';
import './App.css';
import data from "./data";

function App() {
  
  const [launches, setLaunches] = React.useState([]);

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

      <img className="image-zoom" src={data[0].src} alt=""/>
    </div>
  );
}

export default App;
