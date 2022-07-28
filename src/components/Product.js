import React from 'react';
import bild from '../images/bild-lg.png'

function Product({reverse}) {
    return (        
        <div className={reverse ? "flex-18 m-auto": ""}>
            <img src={bild} alt="icon" /> 
        </div>        
    );
}

export default Product;