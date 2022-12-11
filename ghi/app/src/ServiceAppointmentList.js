import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react"


function ServiceAppointmentList() {
    const [service_appointments, setService_Appointments] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8080/api/serviceappointments/')
                .then(response => response.json())
                .then(data => {
                    setService_Appointments(data.service_appointments);
                })
                .catch(e => console.error('error: ', e));
        }, [])




    return (
        <>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Vin</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Service Reason</th>
                <th>Technician</th>
                <th>Status</th>
                <th>VIP treatment </th>
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
                    <td><button></button><button></button></td>
                    <td></td>
                    <td>{service.dealership_purchase}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to ="/serviceappointment/new" className="btn btn-primary btn-lg px-4 gap-3">Create a new Service appointment!</Link>
        </div>
          </>
        );
      }

      export default ServiceAppointmentList;
