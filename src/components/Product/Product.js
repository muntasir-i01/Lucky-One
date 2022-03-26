import './Product.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {
    
    const {id, name, img, price} = product;
    
    
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
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
}; 

export default Product;