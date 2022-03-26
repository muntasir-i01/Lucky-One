import './Product.css'
import React, { useState } from 'react';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props; //to Line 4
    // console.log(props.product);
    const {id, name, img, price} = product;
    

    // console.log(props);
    // const {handleAddToCart} = props;
    
    return ( 
        <div>
            <div className = 'product' >
        <img src = { img } alt = "" />
        {/* <p className = 'product-id' > { id } </p>  */}
        <p className = 'product-name' > { name } </p> 
        <p className = 'product-price' > Price: $ { price } </p>
                
        </div>

        <button onClick={() => handleAddToCart(product)} className='btn-cart'>
            <p>Add to Cart</p>
        </button>
        </div>
    );
}; 

export default Product;