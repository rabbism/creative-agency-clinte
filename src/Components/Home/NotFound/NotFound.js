import React from 'react';
import Navbar from '../Navbar/Navbar';

const NotFound = () => {
    return (
        <div className='text-center'>
            <Navbar></Navbar>
            <h3 className='mt-5'>Page Not Found <br/> Error 404</h3>
        </div>
    );
};

export default NotFound;