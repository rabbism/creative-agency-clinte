import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    console.log(service)
    return (
        <Link to='/dashboard' style={{textDecoration: 'none'}}>
            <div className="card services-card-style my-5">
                <div className="card-body text-center">
                    {
                        service.image ? <img style={{height: '50px'}} src={`data:image/png;base64,${service.image.img}`}/>
                        :
                        <img style={{height: '50px'}} className="img-fluid mb-3" src={`https://stark-castle-58192.herokuapp.com/${service.img}`} alt=""/>
                    }
                    <img style={{height: '50px'}} src={service.img} alt="" />
                    <h5 className="mt-3 mb-3">{service.name}</h5>
                    <p className="text-secondary">{service.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServiceDetail;