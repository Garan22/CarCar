import React, {useEffect, useState} from 'react';

const SalesRecordForm = () => {


    const [automobile, setAutomobile] = useState("");
    const [automobiles, setAutomobiles] = useState([]);
    const [salesperson, setSalesPerson] = useState("");
    const [salesteam, setSalesTeam] = useState([]);
    const [customer, setCustomer] = useState("");
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        const automobileUrl = "http://localhost:8090/api/automobiles/"
        fetch(automobileUrl)
            .then(response => response.json())
            .then(data => setAutomobiles(data.automobiles))
            .catch(e => console.error("error:", e))
    }, [])


    useEffect(() => {
        const salespersonUrl = "http://localhost:8090/api/salesteam/"
        fetch(salespersonUrl)
            .then(response => response.json())
            .then(data => setSalesTeam(data.salesteam))
            .catch(e => console.error("error:", e))
    }, [])

    useEffect(() => {
        const customerUrl = "http://localhost:8090/api/customers/"
        fetch(customerUrl)
            .then(response => response.json())
            .then(data => setCustomers(data.customers))
            .catch(e => console.error("error:", e))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSaleRecord = {
            "automobile": automobile,
            "salesperson": salesperson,
            "customer": customer,
            "price": price,
        }

        console.log(newSaleRecord)
        
        const salerecord_url = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(newSaleRecord),
            headers: {
                "Content-Type": "application/json",
            }

        }

        fetch(salerecord_url, fetchConfig)
            .then(response => response.json())
            .then(() => {
                setAutomobile('');
                setSalesPerson('');
                setCustomer('')
                setPrice('');
            })

            .catch(e => console.error("error:", e))


    }

    const handleAutoChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const handleChangeSalesperson = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value
        setPrice(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Automobile</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input value={price} onChange={handlePriceChange} required type="number" name="number" id="number" className="form-control" />
                            <label>Price</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleAutoChange} value={automobile} required id="automobiles" name="automobiles" className="form-select">
                                <option value="">Choose a Car</option>
                                {automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.vin} value={automobile.vin}>{automobile.vin}</option>
                                    );
                                })}
                            </select>
                            <select onChange={handleChangeSalesperson} value={salesperson} required id="salesperson" name="salesperson" className="form-select">
                                <option value="">Choose a Sales Rep</option>
                                {salesteam.map(salesperson => {
                                    return (
                                        <option key={salesperson.employee_id} value={salesperson.employee_id}>{salesperson.name}</option>
                                    );
                                })}
                            </select>
                            <select onChange={handleCustomerChange} value={customer} required id="customer" name="customer" className="form-select">
                                <option value="">Choose a Customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>{customer.name}</option>
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



export default SalesRecordForm
