import React from 'react';
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react"
import './index.css'


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

    const OnDeleteServiceAppointmentClick = (service) => {
        const pk = service.id
        const serviceUrl = `http://localhost:8080/api/serviceappointments/${pk}/`
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            }
        }
        fetch(serviceUrl, fetchConfig)
            .then(response => response.json())
            .then(data => {
                if (data.deleted) {
                    const currentService = [...service_appointments]
                    setService_Appointments(currentService.filter(service => service.id !== pk))
                }
            })
            .catch(e => console.log('error: ', e));
    }


    return (
        <>

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
                    <td><button className="btn btn-primary" id="button1" onClick={() => OnDeleteServiceAppointmentClick(service)}>Canceled</button><button id="button2" className="btn btn-primary" onClick={() => OnDeleteServiceAppointmentClick(service)}>Finished</button></td>
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
