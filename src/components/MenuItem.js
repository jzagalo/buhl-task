import React from 'react';
import caret from '../images/caret.svg'

function MenuItem({ text }) {
    return (  
        <div>
            <a href="/#" className="menu-item">                
                <span>{text}</span>
                <img src={caret} alt="icon" width="15"/>           
            </a>     
        </div>      
       
    );
}

export default MenuItem;