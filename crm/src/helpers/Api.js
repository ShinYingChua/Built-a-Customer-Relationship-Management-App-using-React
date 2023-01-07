const SERVER_PREFIX = `http://localhost:3001`;

const Api = {
    addCustomers(value) {
        return fetch(`${SERVER_PREFIX}/customers`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ value }),
            method: "POST",
        });
    },
    editCustomers(id, value) {
        return fetch(`${SERVER_PREFIX}/customers/${id}`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ value }),
            method: "PUT",
        });
    },
    deleteCustomers(id) {
        return fetch(`http://localhost:3001/customers/${id}`, {
            method: "DELETE",
        });
    },
    getAllCustomers() {
        return fetch("http://localhost:3001/customers");
    },
    getCustomer(id) {
        return fetch(`http://localhost:3001/customers/${id}`);
    },
};

export default Api;