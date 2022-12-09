import React, {useState} from 'react';

const CustomerForm = () => {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const newCustomer = {
            'name': name,
            'address': address,
            'phone': phone,
        }

        console.log(newCustomer)

        const customerUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(newCustomer),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(customerUrl, fetchConfig)
            .then(response => response.json())
            .then(() => {
                setName('');
                setAddress('');
                setPhone('');
            })
            .catch(e => console.log('error: ', e));
    }


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handlePhoneChange = (event) => {

        const value = event.target.value;
        setPhone(value);
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
                            <input value={address} onChange={handleAddressChange} required type="text" name="address" id="address" className="form-control" />
                            <label>Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={phone} onChange={handlePhoneChange} required type="text" name="phone" id="phone" maxLength={12} className="form-control" />
                            <label>Phone (Use this format: XXX-XXX-XXXX)</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm;
