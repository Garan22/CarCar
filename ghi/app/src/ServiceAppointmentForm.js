import React, { useState} from 'react'
import './index.css'

function ServiceAppointmentForm() {

const [values, setValues] = useState({
    vin: '',
    customer_name: '',
    date: '',
    time: '',
    service_reason: '',
    dealership_purchase: '',
    dealership_purchased: [],

})


const [submitted, setSubmitted] = useState(false)
const [valid, setValid] = useState(false)

const handleVinChange = (event) => {
  setValues({...values, vin: event.target.value})
}
const handleCustomer_NameChange = (event) => {
  setValues({...values, customer_name: event.target.value})
}
const handleDateChange = (event) => {
  setValues({...values, date: event.target.value})
}
const handleTimeChange = (event) => {
  setValues({...values, time: event.target.value})
}
const handleService_ReasonChange = (event) => {
  setValues({...values, service_reason: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    if(values.vin && values.customer_name && values.date && values.time && values.service_reason) {
      setValid(true)
    }
    setSubmitted(true)
  }

    const newServiceAppointment = {
        'vin': values.vin,
        'customer_name': values.customer_name,
        'date': values.date,
        'time': values.time,
        'service_reason': values.service_reason,
        'dealership_purchase': values.dealership_purchase,
    }

    const ServiceAppointmentUrl = 'http://localhost:8080/api/serviceappointments/'
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(newServiceAppointment),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    fetch(ServiceAppointmentUrl, fetchConfig)
        .then(response => response.json())
        .then(() => {
            setValues(values)
            setSubmitted(true)
        })
        .catch(e => console.log('error:', e))



return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Service Appointment</h1>
          <form onSubmit={handleSubmit} id="create-Service-Appointment-form">
            {submitted && valid? <div className="success-message">Success! Thank you for creating a Service appointment!</div> : null}

            <div className="form-floating mb-3">
              <input
              value={values.vin}
              onChange={handleVinChange} placeholder="Vin"
              required type="text"
              name="Vin" id="Vin" className="form-control" />
              <label htmlFor="Vin">Vin</label>
              {submitted && !values.vin ? <span id="span" >Please enter a vin</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.customer_name}
              onChange={handleCustomer_NameChange} placeholder="customer_name"
              required type="text"
              name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="customer_name">Customer name</label>
              {submitted && !values.customer_name ? <span id="span">Please enter a customer name</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.date}
              onChange={handleDateChange} placeholder="date"
              required type="text"
              name="date" id="date" className="form-control" />
              <label htmlFor="date">Date</label>
              {submitted && !values.date ? <span id="span">Please enter a date</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.time}
              onChange={handleTimeChange} placeholder="time"
              required type="text"
              name="time" id="time" className="form-control" />
              <label htmlFor="time">Time</label>
              {submitted && !values.time ? <span id="span">Please enter a time</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.service_reason}
              onChange={handleService_ReasonChange} placeholder="service_reason"
              required type="text"
              name="service_reason" id="service_reason" className="form-control" />
              <label htmlFor="service_reason">Service reason</label>
              {submitted && !values.service_reason ? <span id="span">Please enter a service reason</span> : null}
            </div>

            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
        export default ServiceAppointmentForm
