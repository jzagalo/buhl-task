import React from 'react';

function Card({ icon, text, title }) {
    return (
        <div className="card-container w-30">
            <div className="card-content">
                <img src={icon} alt="icon" width="106" height="100"/> 
                <h4>{title}</h4>
                <p>{text}</p>     
            </div>                  
        </div>
    );
}

export default Card;