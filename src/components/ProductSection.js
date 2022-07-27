import React from 'react'
import Product from './Product'
import Content from './Content'

function ProductSection({ reverse }) { 
    const flexReverse = reverse ? "flex justify-between flex-reverse" : "flex justify-between"  
    return (
        <div className="product-section">
            <div className="content">
                <div className={flexReverse}>
                    <Product />
                    <Content modClass={reverse ? "flex-82" : "flex-82"} reverse={reverse} />
                </div>         
            </div>            
        </div>
    );
}

export default ProductSection;