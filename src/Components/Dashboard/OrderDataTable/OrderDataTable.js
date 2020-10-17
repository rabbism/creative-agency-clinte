import React from 'react';

const OrderDataTable = ({order}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email Id</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                </tr>
            </thead>
            <tbody>
                {
                  order.map((services, index) => 
                        
                    <tr>
                        <td>{services.name}</td>
                        <td>{services.email}</td>
                        <td>{services.design}</td>
                        <td>{services.details}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderDataTable;