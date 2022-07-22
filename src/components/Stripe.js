import React from 'react';

function Stripe({ value, color }) {
    return (
        <div style={{ flex: value, background: color, height: "3px" }}>            
        </div>
    );
}

export default Stripe;