import React from 'react';
import './Button.css'
const Button = ({children}) => {
    return (
        <>
          <button className='my_btn'> {children}</button>  
        </>
    );
};

export default Button;