import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect (() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product); 
       
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} 
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        >
                        </Product>)
                    }
                    {/* <h3>This is for Products: {products.length}</h3> */}
                </div>
                <div className="cart-container">
                    
                    <h5>Selected Items: {cart.map(c => <li>c.name</li>)} </h5>
                    <button>Choose 1 For Me</button>
                <button>Choose Again</button>
                </div>
                
            </div>
        </div>
    );
};

export default Shop;