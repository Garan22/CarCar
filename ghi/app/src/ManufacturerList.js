import React from 'react';
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8100/api/manufacturers/')
            .then(response => response.json())
            .then(data => {
                setManufacturers(data.manufacturers);
            })
            .catch(e => console.error('error: ', e));
    }, [])






    return (
        <>
        <div>
          <h1 className="text-center">
            Manufacturers List
          </h1>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map(manufacturer => {
                return (
                  <tr key={manufacturer.id}>
                    <td>{manufacturer.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to ="/manufacturers/new" className="btn btn-primary btn-lg px-4 gap-3">Create a new Manufacturer !</Link>
        </div>
          </>
        );
      }

      export default ManufacturerList;
