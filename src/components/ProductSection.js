import React from 'react'
import Product from './Product'
import Content from './Content'

function ProductSection({ reverse }) { 
    const flexReverse = reverse ? "flex justify-between flex-reverse product-section-sm" : "flex justify-between product-section-sm"  
    return (
        <div className="product-section">
            <div className="content">
                <div className={flexReverse}>
                    <Product reverse={reverse} />
                    <Content modClass={reverse ? "flex-82" : "flex-82"} reverse={reverse} />
                </div>         
            </div>            
        </div>
    );
}

export default ProductSection;