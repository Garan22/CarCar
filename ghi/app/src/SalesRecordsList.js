import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react"

function SalesRecordList() {
    const [salesrecords, setSalesrecords] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8090/api/sales/')
                .then(response => response.json())
                .then(data => {
                    setSalesrecords(data.salesrecords);
                })
                .catch(e => console.error('error: ', e));
        }, [])




    return (
        <>
        <div>
          <h1 className="text-center">
            Sales Records List
            </h1>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Salesperson</th>
                <th>Customer</th>
                <th>Vin</th>
                <th>Sales Price</th>
              </tr>
            </thead>
            <tbody>
              {salesrecords.map(sale => {
                return (
                  <tr key={sale.id}>
                    <td>{sale.salesperson.name}</td>
                    <td>{sale.customer.name}</td>
                    <td>{sale.automobile.vin}</td>
                    <td>${sale.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to ="/salesrecord/new" className="btn btn-primary btn-lg px-4 gap-3">Record a new Sale !</Link>
        <Link to ="/salesrecords/history" className="btn btn-primary btn-lg px-4 gap-3">View sales by Salesperson</Link>

        </div>
          </>
        );
      }

      export default SalesRecordList;
