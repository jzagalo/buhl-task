import React from 'react';
import Stripe from './Stripe';

const stripeColors = [{ value: 2, color:"#FFDE12"},{ value: 1, color:"#CCEAF1"},
{ value: 1, color:"#63C2CD"},{ value: 1, color:"#CCEAF1"},{ value: 2, color:"#023E84"},
{ value: 1, color:"#63C2CD"},{ value: 1, color:"#E9435C"},{ value: 2, color:"#A2C62E"},
{ value: 1, color:"#95D2DD"},{ value: 2, color:"#F29213"}]

function StripeRow() {
    const stripeElement = stripeColors.map(item => <Stripe color={item.color} value={item.value} />)
    return (
        <div className="flex">
            {stripeElement}
        </div>
    );
}

export default StripeRow;