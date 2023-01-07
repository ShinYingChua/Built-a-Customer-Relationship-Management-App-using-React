import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Api from "../helpers/Api";

//import statements
function SearchCustomers() {
    //TODO: define state variables
    const [data, setData] = useState([]);

    useEffect(() => {
        Api.getAllCustomers()
            .then((res) => res.json())
            .then((customers) => {
                setData(customers);
                console.log(customers);
            });
    }, []);

    //used for navigating to other pages after adding/editing
    //a record
    const navigate = useNavigate();
    //TODO: integrate with API
    //TODO: complete implementation
    const customercomponents = data.map(({ id, name }) => {
        return (
            <div key={id}>
                {name}<button onClick={() => {
                    navigate(`/view/${id}`)
                }}>Edit</button>
            </div>
        );
    });

    return <div>{customercomponents}</div>;
}
export default SearchCustomers;