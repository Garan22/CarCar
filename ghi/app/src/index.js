import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loaddata() {
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/")
  const automobileResponse = await fetch("http://localhost:8100/api/automobiles/")
  const modelResponse = await fetch("http://localhost:8100/api/models/")
  if (manufacturerResponse.ok && automobileResponse.ok && modelResponse.ok) {
    const manufacturerData = await manufacturerResponse.json();
    const automobileData = await automobileResponse.json();
    const modelData = await modelResponse.json();
    console.log(manufacturerData);
    console.log(automobileData);
    console.log(modelData)
    root.render(
      <React.StrictMode>
        <App manufacturers={manufacturerData.manufacturers} autos={automobileData.autos} models={modelData.models}/>
      </React.StrictMode>
    )
  } else {
    console.error(manufacturerResponse)
  }
}

loaddata();
