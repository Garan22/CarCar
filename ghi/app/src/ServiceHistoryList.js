import React from 'react';
import {useEffect, useState} from "react"
import './index.css'

const SearchBar = () => {
    const[searchInput, setSearchInput] = useState('')

    const handleSearchChange = (event) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    function ServiceHistoryList() {
        const [service_appointments, setService_Appointments] = useState([]);



        useEffect(() => {
                fetch('http://localhost:8080/api/serviceappointments/')
                    .then(response => response.json())
                    .then(data => {
                        setService_Appointments(data.service_appointments);
                    })
                    .catch(e => console.error('error: ', e));
            }, [])

        if (searchInput.length> 0) {
            service_appointments.filter((service) => {
            return service.vin.match(searchInput)
            })
        }



    return (
        <>

<div class="input-group">
  <div class="form-outline">
    <input id="search-input" type="search" class="form-control" onChange={handleSearchChange}
        value={searchInput}/>
    <label class="form-label" for="form1">Search</label>
  </div>
  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>



        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Vin</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Appointment time</th>
                <th>Service Reason</th>
                <th>Technician</th>
              </tr>
            </thead>
            <tbody>
              {service_appointments.map(service => {
                return (
                  <tr key={service.id}>
                    <td>{service.vin}</td>
                    <td>{service.customer_name}</td>
                    <td>{service.date}</td>
                    <td>{service.time}</td>
                    <td>{service.service_reason}</td>
                    <td>{service.technician.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          </>
        );
      }
      ServiceHistoryList()
    }
      export default SearchBar;
