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
const handleDealership_PurchaseChange = (event) => {
    setValues({...values, dealership_purchase: event.target.value})
}
const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    if(values.vin && values.customer_name && values.date && values.time && values.service_reason) {
    setValid(true)
    }
    const newServiceAppointment = {
        'vin': values.vin,
        'customer_name': values.customer_name,
        'date': values.date,
        'time': values.time,
        'service_reason': values.service_reason,
        'dealership_purchase': values.dealership_purchase,
    }
    console.log(newServiceAppointment)

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
}


return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Auto Technician</h1>
          <form onSubmit={handleSubmit} id="create-Auto-Technician-form">
            {submitted && valid? <div className="success-message">Success! Thank you for creating a Service appointment!</div> : null}

            <div className="form-floating mb-3">
              <input
              value={values.vin}
              onChange={handleVinChange} placeholder="Vin"
              required type="text"
              name="Vin" id="Vin" className="form-control" />
              <label htmlFor="Vin">Vin</label>
              {submitted && !values.vin ? <span>Please enter a vin</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.customer_name}
              onChange={handleCustomer_NameChange} placeholder="customer_name"
              required type="text"
              name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="customer_name">customer name</label>
              {submitted && !values.customer_name ? <span>Please enter a customer name</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.date}
              onChange={handleDateChange} placeholder="date"
              required type="text"
              name="date" id="date" className="form-control" />
              <label htmlFor="date">date</label>
              {submitted && !values.date ? <span>Please enter a date</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.time}
              onChange={handleTimeChange} placeholder="time"
              required type="text"
              name="time" id="time" className="form-control" />
              <label htmlFor="time">time</label>
              {submitted && !values.time ? <span>Please enter a time</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.service_reason}
              onChange={handleService_ReasonChange} placeholder="service_reason"
              required type="text"
              name="service_reason" id="service_reason" className="form-control" />
              <label htmlFor="service_reason">Service reason</label>
              {submitted && !values.service_reason ? <span>Please enter a service reason</span> : null}
            </div>

            {/* <div className="mb-3">
              <select
              value={values.cancel}
              onChange={handleCancelChange} placeholder="cancel"
              required type="text"
              name="cancel" id="cancel" className="form-select" >
              <option htmlFor="">cancel</option>
                  <option></option>

              {submitted && !values.cancel ? <span>Please enter a cancel</span> : null}
              </select>
            </div>

            <div className="mb-3">
              <input
              value={values.finish}
              onChange={handleFinishChange} placeholder="finish"
              required type="text"
              name="finish" id="finish" className="form-control" />
              <label htmlFor="finish">finish</label>
              {submitted && !values.finish ? <span>Please enter a finish</span> : null}
            </div>

            <div className="mb-3">
              <input
              value={values.dealership_purchase}
              onChange={handleDealership_PurchaseChange} placeholder="dealership_purchase"
              required type="text"
              name="dealership_purchase" id="dealership_purchase" className="form-control" />
              <label htmlFor="dealership_purchase">Dealership purchase</label>
              {submitted && !values.dealership_purchase ? <span>Please enter a dealership purchase</span> : null}
            </div> */}

            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
        }
        export default ServiceAppointmentForm
