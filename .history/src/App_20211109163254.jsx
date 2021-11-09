import React from 'react';
import './App.css';
import data from "./data";

function App() {

  const [image, setImage] = React.useState([0]);
  const [zoom, setZoom] = React.useState([0]);

  return (
    <div>
      <div className="title">interesting findings</div>
      <div className="title">This is the place for most interesting art found in Web.</div>
      <div className="image-container">
      {data.map((image, index) => {
        return (
          <img className="image" src={image.src} key={index} onClick={()=> {setImage(index); setZoom(1)}} alt="" />
      )}
      )}
      </div>
      {zoom === 1 ? 
      <div className="image-zoom-background" onClick={() => setZoom(0)}>
      <img className="image-zoom" onClick={() => setZoom(0)} src={data[image].src} alt=""/>
      </div>
    : ""}
    </div>
  );
}

export default App;
