import React from 'react';

function ActionButton({ image, text, large }) {
    const modClass = (large === undefined) ? "": large
    const addedClass = "action-button flex align-center justify-center " +  modClass
    
    return (      
        <a href="/#" className={addedClass}>
            {image !== undefined ? <img src={image} alt="icon" width="25"/> : null} 
            <span>{text}</span>          
        </a>
    );
}

export default ActionButton;