import React from 'react';
import './App.css';
import data from "./data";

function App() {

  const [image, setImage] = React.useState([]);

  return (
    <div>
      <div className="image-container">
      {data.map((image, index) => {
        return (
          <div className="image-wrap">
          <img className="image" src={image.src} onClick={setImage(image = index)} alt="" />
          </div>
      )}
      )}
      </div>

      <img className="image-zoom" src={data[image].src} alt=""/>
    </div>
  );
}

export default App;
