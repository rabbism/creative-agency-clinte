import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddReview.css';

const AddReview = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const newReview = { ...info};

        fetch('https://stark-castle-58192.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Your review has been saved successfully')
        })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className="mb-5">Review</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="companyName" placeholder="Company's name, Designation" />
                    </div>                   
                    <div className="form-group">
                       <textarea onBlur={handleBlur} name="description" placeholder="Description" cols="61" rows="3"></textarea>
                    </div>                   
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;