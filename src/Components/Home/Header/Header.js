import React from 'react';
import BrandInfo from '../BrandInfo/BrandInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='container header-container'>
                <Navbar className='mt-5'></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <BrandInfo></BrandInfo>
        </div>
    );
};

export default Header;