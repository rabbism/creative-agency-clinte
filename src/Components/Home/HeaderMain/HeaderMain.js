import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#111430'}}>Let's Grow Your <br/> Brand To The <br/> Next Label</h1>
                <p style={{color: '#000000'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima. Lorem ipsum dolor sit amet.</p>
                <button className="btn btn-dark p-2">
                    <Link to='hireUs' style={{color: 'white', textDecoration: 'none'}}>
                        Hire Us
                    </Link>
                </button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;