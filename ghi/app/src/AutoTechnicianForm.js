import React, { useState} from 'react'
import './index.css'

// const AutoTechnicianForm = () => {
function AutoTechnicianForm() {

const [values, setValues] = useState({
    name: '',
    employee_number: '',
    employee_numbers: [],
})


const [submitted, setSubmitted] = useState(false)
const [valid, setValid] = useState(false)

const handleNameChange = (event) => {
    setValues({...values, name: event.target.value})
}
const handleEmployee_NumberChange = (event) => {
    setValues({...values, employee_number: event.target.value})
}
const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    if(values.name && values.employee_number) {
    setValid(true)
    }
    const newAutoTechnician = {
        'name': values.name,
        'employee_number': values.employee_number,
    }
    // console.log(newAutoTechnician)

    const AutoTechnicianUrl = 'http://localhost:8080/api/autotechnician/'
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(newAutoTechnician),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    fetch(AutoTechnicianUrl, fetchConfig)
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
            {submitted && valid? <div className="success-message">Success! Thank you for creating an Auto Technician</div> : null}

            <div className="form-floating mb-3">
              <input
              value={values.name}
              onChange={handleNameChange} placeholder="Name"
              required type="text"
              name="Name" id="Name" className="form-control" />
              <label htmlFor="Name">Name</label>
              {submitted && !values.name ? <span>Please enter a name</span> : null}
            </div>

            <div className="form-floating mb-3">
              <input
              value={values.employee_number}
              onChange={handleEmployee_NumberChange} placeholder="employee_number"
              required type="number" name="employee_number" id="employee_number" className="form-control" />
              <label htmlFor="employee_number">employee number</label>
              {submitted && !values.employee_number ? <span>Please enter an employee number</span> : null}
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
        }
        export default AutoTechnicianForm
