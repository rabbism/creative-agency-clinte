import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ServiceDataTable from '../ServiceDataTable/ServiceDataTable';


const AllService = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://stark-castle-58192.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Service List</h5>
                <ServiceDataTable service={service}></ServiceDataTable>
            </div>
        </div>
    );
};

export default AllService;