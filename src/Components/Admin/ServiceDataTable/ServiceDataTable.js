import React from 'react';

const ServiceDataTable = ({service}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email Id</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  service.map((services, index) => 
                        
                    <tr>
                        <td>{services.name}</td>
                        <td>{services.email}</td>
                        <td>{services.design}</td>
                        <td>{services.details}</td>
                        <td>Done</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ServiceDataTable;