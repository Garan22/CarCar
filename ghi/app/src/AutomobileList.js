import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react"

function AutomobileList() {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8100/api/automobiles/')
                .then(response => response.json())
                .then(data => {
                    setAutos(data.autos);
                })
                .catch(e => console.log('error: ', e));
        }, [])




    return (
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to ="/automobiles/new" className="btn btn-primary btn-lg px-4 gap-3">Create a new Automobile !</Link>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Color</th>
                <th>Year</th>
                <th>Vin</th>
                <th>Model</th>
                <th>Manufacturer</th>
              </tr>
            </thead>
            <tbody>
              {autos.map(auto => {
                return (
                  <tr key={auto.id}>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.vin}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to ="/automobiles/new" className="btn btn-primary btn-lg px-4 gap-3">Create a new Automobile !</Link>
        </div>
          </>
        );
      }

      export default AutomobileList;
