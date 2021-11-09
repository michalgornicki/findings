import React from 'react';
import './App.css';
import data from "./data";

function App() {

  const [image, setImage] = React.useState([0]);
  const [zoom, setZoom] = React.useState([0]);

  return (
    <div>
      <div className="image-container">
      {data.map((image, index) => {
        return (
          <div className="image-wrap">
          <img className="image" src={image.src} onClick={()=> {setImage(index); setZoom(1)}} alt="" />
          </div>
      )}
      )}
      </div>
      {zoom == 1 ? <div className="image-zoom-background"> : ""}
      <img className="image-zoom" onClick={() => setZoom(0)} src={data[image].src} alt=""/>
      </div>
    </div>
  );
}

export default App;
