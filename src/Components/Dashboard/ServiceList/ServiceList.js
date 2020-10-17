import React, { useEffect, useState } from 'react';
import OrderDataTable from '../OrderDataTable/OrderDataTable';
import Sidebar from '../Sidebar/Sidebar';


const ServiceList = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://stark-castle-58192.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Service List</h5>
                <OrderDataTable order={service}></OrderDataTable>
            </div>
        </div>
    );
};

export default ServiceList;