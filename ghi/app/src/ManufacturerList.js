import React from 'react';
import {useEffect, useState} from "react"

function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8100/api/manufacturers/')
            .then(response => response.json())
            .then(data => {
                setManufacturers(data.manufacturers);
            })
            .catch(e => console.log('error: ', e));
    }, [])






    return (
        <>
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
          </>
        );
      }

      export default ManufacturerList;
