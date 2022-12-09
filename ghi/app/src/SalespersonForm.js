import React, {useState} from 'react';

const SalespersonForm = () => {


    const [name, setName] = useState('');
    const [employee_id, setEmployee_Id] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const newSalesperson = {
            'name': name,
            'employee_id': employee_id,
        }

        console.log(newSalesperson)

        const salesTeamUrl = "http://localhost:8090/api/salesteam/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(newSalesperson),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(salesTeamUrl, fetchConfig)
            .then(response => response.json())
            .then(() => {
                setName('');
                setEmployee_Id('');
            })
            .catch(e => console.error('error: ', e));
    }


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleEmployee_IdChange = (event) => {
        const value = event.target.value;
        setEmployee_Id(value);
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employee_id} onChange={handleEmployee_IdChange} required type="number" name="employee_id" id="employee_id" className="form-control" />
                            <label>Employee_id</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SalespersonForm;
