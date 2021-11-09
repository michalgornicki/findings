import React from 'react';
import './App.css';

function App() {
  return (
    <p>
      function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
    </p>
  );
}

export default App;
