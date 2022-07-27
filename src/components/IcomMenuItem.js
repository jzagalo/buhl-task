import React from 'react';

function IcomMenuItem({ text, src }) {
    return ( 
        <div>
            <a href="/#" className="menu-item flex-column"> 
                <img src={src} alt="icon" width="24"/>              
                <p>{text}</p>                       
             </a>   
        </div>             
    );
}

export default IcomMenuItem;