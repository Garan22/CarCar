import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadmanufacturer() {
  const response = await fetch("http://localhost:8100/api/manufacturers/")
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    root.render(
      <React.StrictMode>
        <App manufacturers={data.manufacturers} />
      </React.StrictMode>
    )
  } else {
    console.error(response)
  }
}

loadmanufacturer();

async function loadautomobiles() {
  const automobileResponse = await fetch("http://localhost:8100/api/automobiles/")
  if(automobileResponse.ok) {
    const automobileData = await automobileResponse.json();
    console.log(automobileData)
    root.render(
      <React.StrictMode>
        <App automobiles={automobileData.automobiles} />
      </React.StrictMode>

    )
  } else {
    console.error(automobileResponse)
  }
}
