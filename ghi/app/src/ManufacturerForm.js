import React, {useState} from 'react';

const ManufacturerForm = () => {
    const [manufacturerName, setManufacturerName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newManufacturer = {"name": manufacturerName}
        console.log(newManufacturer)
        const manufacturerURL = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(newManufacturer),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetch(manufacturerURL, fetchConfig)
            .then(response => response.json())
            .then(() => {
                setManufacturerName('');
            })
            .catch(e => console.log("error", e))

    }

    const handleNameChange = (event) => {
        const value =event.target.value;
        setManufacturerName(value);
    }



    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer!</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={manufacturerName} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            <br></br>
            <a href="/manufacturers/">
                <button className="btn btn-outline-danger">Back to ManufacturerList list</button>
            </a>
          </div>
        </div>
      </div>
    );


}


export default ManufacturerForm;
