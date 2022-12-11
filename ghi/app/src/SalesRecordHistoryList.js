import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react"

function SalesRecordHistoryList() {
    const [salesrecords, setSalesrecords] = useState([]);
    const [salesteam, setSalesTeam] = useState([]);
    const [selection, setSelection] = useState("");


    useEffect(() => {
        fetch('http://localhost:8090/api/sales/')
            .then(response => response.json())
            .then(data => {
                setSalesrecords(data.salesrecords);
            })
            .catch(e => console.error('error: ', e));
    }, [])

    useEffect(() => {
        fetch('http://localhost:8090/api/salesteam/')
            .then(response => response.json())
            .then(data => {
                setSalesTeam(data.salesteam);
            })
            .catch(e => console.error('error: ', e));
    }, [])


    const handleSalespersonChange = (event) => {
        const value = event.target.value
        setSelection(value)

    }

    let results = "table table-bordered d-none"
    if (selection !== "") {
        results = "table table-bordered"
    }





    return (
        <>
          <select onChange={handleSalespersonChange} value={results} required id="salesperson" name="salesperson" className="form-select">
                                <option value="">Choose a Salesrep</option>
                                {salesteam.map(salesperson => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.id}>{salesperson.name}</option>
                                    );
                                })}
                            </select>
        <div>
          <h1 className="text-center">
            Sales Records List for selected Salesperson
            </h1>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <table className={results}>
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

                if (sale.salesperson.id == selection) {

                return (
                  <tr key={sale.id}>
                    <td>{sale.salesperson.name}</td>
                    <td>{sale.customer.name}</td>
                    <td>{sale.automobile.vin}</td>
                    <td>${sale.price}</td>
                  </tr>
                );
                }
              })}
            </tbody>
          </table>
        </div>
          </>
        );
      }

      export default SalesRecordHistoryList;
