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
  const automobileResponse = await fetch("http://localhost:8100/api/automobiles/")
  const modelResponse = await fetch("http://localhost:8100/api/models/")
  if ( automobileResponse.ok && modelResponse.ok) {
    const automobileData = await automobileResponse.json();
    const modelData = await modelResponse.json();
    console.log(automobileData);
    console.log(modelData)
    root.render(
      <React.StrictMode>
        <App autos={automobileData.autos} models={modelData.models}/>
      </React.StrictMode>
    )
  } else {
    console.error(automobileResponse)
  }
}

loaddata();
