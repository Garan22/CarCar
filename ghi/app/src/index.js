import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import VehicleModelForm from './VehicleModelForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loaddata() {
  const modelResponse = await fetch("http://localhost:8100/api/models/")
  if  (modelResponse.ok) {
    const modelData = await modelResponse.json();
    console.log(modelData)
    root.render(
      <React.StrictMode>
        <App models={modelData.models}/>
      </React.StrictMode>
    )
  } else {
    console.error(modelResponse)
  }
}

loaddata();
