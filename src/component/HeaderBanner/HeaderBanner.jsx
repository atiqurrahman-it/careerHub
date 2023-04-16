import React from 'react';
import './HeaderBanner.css'
const HeaderBanner = ({children}) => {
    return (
        <div className='headerBanner'>
            <h1 className='md:text-4xl text-2xl  font-bold'>{children}</h1>  
        </div>
    );
};

export default HeaderBanner;