// TODO: define the relevant props to allow ManageCustomer to
// connect with it
import React from "react";

function FormText({ label, value, onChange }) {
    return (
        <div>
            {label}
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
}
export default FormText;