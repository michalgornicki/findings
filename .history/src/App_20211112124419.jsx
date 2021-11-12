import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css';
import data from "./data";

function App() {

  const [image, setImage] = React.useState([0]);
  const [zoom, setZoom] = React.useState([0]);

  return (
    <div>
      <div className="title">interesting findings</div>
      <div className="footer">This is the place for most interesting art found in Web.</div>
      <div className="image-container">
      {data.map((image, index) => {
        return (
          <LazyLoadImage className="image" src={image.src} effect="blur" key={index} onClick={()=> {setImage(index); setZoom(1)}} alt="" />
      )}
      )}
      </div>
      {zoom === 1 ? 
      <div>
      <div className="image-zoom-background" onClick={() => setZoom(0)}>
      <LazyLoadImage className="image-zoom" onClick={() => setZoom(0)} src={data[image].src} alt=""/>
      </div>

      <div className="thumbnail-container">
      {image > 1 ? <LazyLoadImage className="image-zoom-thumbnail" onClick={() => setImage(image - 2)} src={data[image - 2].src} alt=""/> : ""}
      {image > 0 ? <LazyLoadImage className="image-zoom-thumbnail" onClick={() => setImage(image - 1)} src={data[image - 1].src} alt=""/> : ""}
      <LazyLoadImage className="image-zoom-thumbnail" onClick={() => setImage(image)} src={data[image].src} alt=""/>
      {image < 40 ? <LazyLoadImage className="image-zoom-thumbnail" onClick={() => setImage(image + 1)} src={data[image + 1].src} alt=""/> : ""}
      {image < 39 ? <LazyLoadImage className="image-zoom-thumbnail" onClick={() => setImage(image + 2)} src={data[image + 2].src} alt=""/> : ""}
      </div>
      </div>
    : ""}
    </div>
  );
}

export default App;
