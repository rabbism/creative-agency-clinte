import React, { useEffect, useState } from 'react';
import webDesign from '../../../images/icons/design.png';
import graphicDesign from '../../../images/icons/graphic.png';
import webDevelopment from '../../../images/icons/development.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

// const serviceData = [
//     {
//         name: 'Web & Mobile Design',
//         img: webDesign,
//         description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
//     },
//     {
//         name: 'Graphic Design',
//         img: graphicDesign,
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
//     },
//     {
//         name: 'Web Development',
//         img: webDevelopment,
//         description: 'With well written codes we build amazing apps for all platforms, mobile and web apps in general.'
//     }
// ];

const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    
    useEffect( () => {
        fetch('https://stark-castle-58192.herokuapp.com/services')
        .then(response => response.json())
        .then(data => {
            setServiceData(data);
        })
    }, [])

    console.log(serviceData);

    return (
        <section className="container mt-5">

            <h3 className='text-center'>Provide awesome <span style={{color: '#7AB259'}}>services</span></h3>

            <div className="d-flex">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
            </div>
        </section>
    );
};

export default Services;