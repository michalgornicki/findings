import React from 'react';
import './App.css';
import data from "./data";

function App() {

  const [image, setImage] = React.useState([0]);

  return (
    <div>
      <div className="image-container">
      {data.map((image, index) => {
        return (
          <div className="image-wrap">
          <img className="image" src={image.src} onClick={() => setImage(index)} alt="" />
          </div>
      )}
      )}
      </div>
      <div className="image-zoom-background">
      <img className="image-zoom" onClick={this.style="display:none"} src={data[image].src} alt=""/>
      </div>
    </div>
  );
}

export default App;
