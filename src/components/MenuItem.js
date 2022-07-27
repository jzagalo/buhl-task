import React from 'react';
import caret from '../images/caret.svg'

function MenuItem({ text }) {
    return (  
        <div>
            <a href="/#" className="menu-item no-icon">                
                <span>{text}</span>
                <img src={caret} alt="icon" width="20"/>           
            </a>     
        </div>      
       
    );
}

export default MenuItem;