import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [info, setInfo] = useState([]);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const newAdmin = { ...info }
        fetch('https://stark-castle-58192.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Admin successfully added');
        })
    }

    return (
        <section className="container-fluid row">
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className='mb-5'>Make Admin</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input style={{width: '400px'}} onBlur={handleBlur} type="email" className="form-control" name="email" id="email" placeholder="john123@gmail.com" />

                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                    
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;