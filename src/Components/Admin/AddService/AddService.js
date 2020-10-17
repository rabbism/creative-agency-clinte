import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('https://stark-castle-58192.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section className="container-fluid row">
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className='mb-5'>Add Service</h3>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Title" />                       
                    </div>

                    <div className="form-group">
                    <   label htmlFor="">Icon</label>
                        <input type="file" onChange={handleFileChange} name="file" id="" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label> <br/>
                        <textarea name="description" onBlur={handleBlur} id="description" placeholder='Enter Description' cols="61" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-success mt-3 float-right">Submit</button>
                    
                </form>
            </div>
        </section>
    );
};

export default AddService;