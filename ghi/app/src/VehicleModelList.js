import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

function VehicleModelList() {
  const [models, setModels] = useState([]);

  useEffect(() => {
          fetch('http://localhost:8100/api/models/')
              .then(response => response.json())
              .then(data => {
                  setModels(data.models);
              })
              .catch(e => console.log('error: ', e));
      }, [])

  // const deleteVehicleModel = async (model) => {

  //   const deleteURL = `http://localhost:8080/api/models/${model.id}`
  //   const fetchConfig = {
  //     method: "DELETE"
  //   }

  //   const response = await fetch(deleteURL, fetchConfig);
  //   if (response.ok) {
  //   }

  // }

  return (
    <>
    <table className="table table-bordered">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Name</th>
            <th>Image Url</th>
            {/* <th>Delete this Vehicle Model</th> */}
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.id}>
                <td>{model.manufacturer.name}</td>
                <td>{ model.name }</td>
                <td><img src={model.picture_url} alt="pics of model" width="100px" /></td>
                {/* <td>
                  <button className="btn btn-danger" onClick={()=> deleteVehicleModel(model)} value={model.id}>Delete</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <Link to ="/models/new" className="btn btn-primary btn-lg px-4 gap-3">Create a new Vehicle Model!</Link>
  </div>
      </>
    );
  }

  export default VehicleModelList
