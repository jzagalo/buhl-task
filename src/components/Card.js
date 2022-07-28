import React from 'react';

function Card({ icon, text, title }) {
    return (
        <div className="card-container w-30">
            <div className="card-content">
                <img src={icon} alt="icon" /> 
                <div>
                    <h4>{title}</h4>
                    <p>{text}</p> 
                </div>
                    
            </div>                  
        </div>
    );
}

export default Card;