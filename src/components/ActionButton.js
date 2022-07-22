import React from 'react';

function ActionButton({ image, text }) {
    return (
        <a href="/#" className="action-button flex align-center">
            <img src={image} alt="icon" width="25"/> 
            <span>{text}</span>          
        </a>
    );
}

export default ActionButton;