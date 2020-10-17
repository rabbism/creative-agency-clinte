import React from 'react';

const AdminDataTable = ({admin}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Email Id</th>                
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  admin.map((admins, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{admins.email}</td>               
                        <td>Admin</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AdminDataTable;