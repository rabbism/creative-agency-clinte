import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddOrder = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
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
        formData.append('email', info.email);
        formData.append('design', info.design);
        formData.append('details', info.details);
        formData.append('price', info.price);

        fetch('https://stark-castle-58192.herokuapp.com/addOrder', {
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
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className='mb-5'>Order</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" defaultValue={loggedInUser.name} placeholder="Your name/company's name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" defaultValue={loggedInUser.email} placeholder="Your Email Address" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="design" placeholder="Graphic Design" />
                    </div>
                    <div className="form-group">
                       <textarea onBlur={handleBlur} name="details" placeholder="Project Details" cols="61" rows="3"></textarea>
                    </div>
                    <div className="form-group-inline mb-3">
                        <input onBlur={handleBlur} type="number" className="form-control mr-3" name="price" placeholder="Price" />
                        
                        <input onChange={handleFileChange} type="file" className="form-control" name="file" id="exampleInputPassword1" placeholder="Upload Project File" />
                    </div>
                    
                    <button type="submit" className="btn btn-dark">Send</button>
                </form>
            </div>
        </section>
    );
};

export default AddOrder;