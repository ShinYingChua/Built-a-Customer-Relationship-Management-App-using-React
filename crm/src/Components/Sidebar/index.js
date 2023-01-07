import { NavLink } from "react-router-dom";

import "./sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/new">Add New Customer</NavLink>
                </li>
                <li>
                    <NavLink to="/customers">List Customers</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;