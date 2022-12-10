import React, {useEffect, useState} from "react"


const SalesRecordForm = () => {
    const [automobile, setAutomobile] = useState("");
    const [autoVOs, setAutoVOs] = useState([]);
    const [salesperson, setSalesPerson] = useState("");
    const [salesteam, setSalesTeam] = useState([]);
    const [customer, setCustomer] = useState("");
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        const automobileUrl = "http://localhost:8090/api/automobiles/"
        fetch(automobileUrl)
            .then(response => response.json())
            .then(data => setAutoVOs(data.automobiles))
            .catch(e => console.error("error:", e))
    })
}


