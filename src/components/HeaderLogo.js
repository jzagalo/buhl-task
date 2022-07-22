import React from 'react';
import Logo from '../images/buhl-logo.svg'

function HeaderLogo() {
    return ( 
        <div>
            <img src={Logo} className="HeaderLogo" alt="Header-Logo" width="45"/>
        </div>
    );
}

export default HeaderLogo;