import React from 'react';
import './App.css';
import data from "./data";
import Reveal from 'react-reveal/Reveal';
import wallpaper from "./wallpaper.jpg";

function App() {

  const [image, setImage] = React.useState([0]);
  const [zoom, setZoom] = React.useState([0]);

  return (
    <div>
      <div className="title">interesting findings</div>
      <div>
      <div className="footer">Here you can find collection most interesting art found in Web.</div>
      <img className="wallpaper" src={wallpaper} alt="" />
      </div>

      <div className="image-container">
      {data.map((image, index) => {
        return (
          <Reveal effect="imageLoading" fraction= "0.85">
          <img className="image" src={image.src} key={index} onClick={()=> {setImage(index); setZoom(1)}} alt="" />
          </Reveal>
      )}
      )}
      </div>
      {zoom === 1 ? 
      <div>
      <div className="image-zoom-background" onClick={() => setZoom(0)}>
      <img className="image-zoom" onClick={() => setZoom(0)} src={data[image].src} alt=""/>
      </div>

      <div className="thumbnail-container">
      {image > 1 ? <img className="image-zoom-thumbnail" onClick={() => setImage(image - 2)} src={data[image - 2].src} alt=""/> : ""}
      {image > 0 ? <img className="image-zoom-thumbnail" onClick={() => setImage(image - 1)} src={data[image - 1].src} alt=""/> : ""}
      <img className="image-zoom-thumbnail" onClick={() => setImage(image)} src={data[image].src} alt=""/>
      {image < 40 ? <img className="image-zoom-thumbnail" onClick={() => setImage(image + 1)} src={data[image + 1].src} alt=""/> : ""}
      {image < 39 ? <img className="image-zoom-thumbnail" onClick={() => setImage(image + 2)} src={data[image + 2].src} alt=""/> : ""}
      </div>
      </div>
    : ""}
    </div>
  );
}

export default App;
