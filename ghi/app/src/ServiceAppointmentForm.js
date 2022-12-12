import React, {useEffect, useState } from 'react'

const ServiceAppointmentForm = () => {


  const [vin, setVin] = useState('')
  const [customer_name, setCustomer_Name] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service_reason, setService_Reason] = useState('')
  const [tech, setTech] = useState('')
  const [technician, setTechnicians] = useState([])




  useEffect(() => {
      const technicianUrl = 'http://localhost:8080/api/autotechnician/'
      fetch(technicianUrl)
          .then(response => response.json())
          .then(data => setTechnicians(data.technician ))
          .catch(e => console.error('error: ', e))
  }, [])

  const handleSubmit = (event) => {
      event.preventDefault()
      const newServiceAppointment = {
        "vin": vin,
        "customer_name":customer_name,
        "date" : date,
        "time": time,
        "service_reason" : service_reason,
        "technician": tech,
      }

      console.log(newServiceAppointment)

      const ServiceAppointmentUrl = "http://localhost:8080/api/serviceappointments/"
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(newServiceAppointment),
          headers: {
              'Content-Type': 'application/json',
          },
      }

      fetch(ServiceAppointmentUrl, fetchConfig)
          .then(response => response.json())
          .then(() => {
              setVin('')
              setCustomer_Name('')
              setDate('')
              setTime('')
              setService_Reason('')
              setTech('')
          })
          .catch(e => console.log('error: ', e));
  }

    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }
    const handleCustomer_NameChange = (event) => {
        const value = event.target.value
        setCustomer_Name(value)
    }
    const handleDateChange = (event) => {
        const value = event.target.value
        setDate(value)
    }
    const handleTimeChange = (event) => {
        const value = event.target.value
        setTime(value)
    }
    const handleService_ReasonChange = (event) => {
        const value = event.target.value
        setService_Reason(value)
    }
    const handleTechChange = (event) => {
        const value = event.target.value
        setTech(value)
    }
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a new Auto Technician</h1>
              <form onSubmit={handleSubmit} id="create-Service-Appointment-form">


                <div className="form-floating mb-3">
                  <input
                  value={vin}
                  onChange={handleVinChange} placeholder="Vin"
                  required type="text"
                  name="Vin" id="Vin" className="form-control" />
                  <label htmlFor="Vin">Vin</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                  value={customer_name}
                  onChange={handleCustomer_NameChange} placeholder="customer_name"
                  required type="text"
                  name="customer_name" id="customer_name" className="form-control" />
                  <label htmlFor="customer_name">customer name</label>

                </div>

                <div className="form-floating mb-3">
                  <input
                  value={date}
                  onChange={handleDateChange} placeholder="date"
                  required type="text"
                  name="date" id="date" className="form-control" />
                  <label htmlFor='date'>Date</label>

                </div>

                <div className="form-floating mb-3">
                  <input
                  value={time}
                  onChange={handleTimeChange} placeholder="time"
                  required type="text"
                  name="time" id="time" className="form-control" />
                  <label htmlFor="time">time</label>

                </div>

                <div className="form-floating mb-3">
                  <input
                  value={service_reason}
                  onChange={handleService_ReasonChange} placeholder="service_reason"
                  required type="text"
                  name="service_reason" id="service_reason" className="form-control" />
                  <label htmlFor="service_reason">Service reason</label>
                </div>

                  <div className="mb-3">
                    <select value={tech} onChange={handleTechChange} required name="technician" className="form-select">
                    <option value="">Choose a technician</option>
                    {technician.map(tech => {
                        return (
                        <option key={tech.id} value={tech.id }>{tech.name}</option>
                    );
                  })}
                    </select>
                    </div>

                    <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
        }
        export default ServiceAppointmentForm
