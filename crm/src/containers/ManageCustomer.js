//import statements
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormText from "../Components/FormText";
import Api from "../helpers/Api";

function ManageCustomer() {
    //used to capture id for edit case
    const { id = 0 } = useParams();
    console.log("##id = ", id)

    const [phone, setPhone] = useState("")

    //used for navigating to other pages after adding/editing
    //a record
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("Male");
    //TODO: define other state variables
    //define the buttonLabel
    const buttonLabel = id === 0 ? "Add" : "Edit";
    //TODO: integrate with API

    function validate() {
        if (name.trim().length <= 0) {
            alert("Please enter a name");
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (id !== 0) {
            Api.getCustomer(id)
                .then(res => res.json())
                .then((customer) => {
                    setName(customer.name);
                    setPhone(customer.phone);
                });
        }
    })

    function handleAddEditAction(e) {
        e.preventDefault();
        if (validate()) {
            if (id === 0) {
                Api.addCustomers({ name, phone }).then(() => {
                    navigate("/customers");
                });
            } else {
                Api.editCustomers(id, { name, phone }).then(() => {
                    navigate("/customers");
                });
            } //end if
        }
    };

    console.log("buttonLabel:", buttonLabel)

    return (
        <div>
            ManageCustomer
            <FormText
                label="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <br />
            <FormText
                label="phone"
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value);
                }}
            />
            <br />

            <button onClick={handleAddEditAction}>Add Customer!</button>
        </div>
    );
}
export default ManageCustomer;
