import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import SearchCustomers from "./containers/SearchCustomers";
import ManageCustomer from "./containers/ManageCustomer";
function App() {
  return (
    <div>
      <Sidebar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ManageCustomer />} />
          <Route path="/view/:id" element={<ManageCustomer />} />
          <Route path="/customers" element={<SearchCustomers />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;