import React from 'react';
import Stripe from './Stripe';

const stripeColors = [{ color:"#FFDE12", w:158.4},{  color:"#CCEAF1", w:115.2},
{ color:"#63C2CD", w: 81.6},{ color:"#CCEAF1", w:93.6},{ color:"#023E84", w: 178.8},
{ color:"#63C2CD", w:72 },{ color:"#E9435C", w:138 },{ color:"#A2C62E", w:138},
{ color:"#FFDE12", w:49.2},{ color:"#95D2DD", w:49.2},{color:"#F29213", w:126}]

const totalWidth = stripeColors.reduce(function (acc, obj) { return acc + obj.w; }, 0);

function StripeRow() {
    const stripeElement = stripeColors.map((item,i) => <Stripe color={item.color} key={i} value={(item.w/totalWidth)*100} />)
    return (
        <div className="flex justify-between">
            {stripeElement}
        </div>
    );
}

export default StripeRow;