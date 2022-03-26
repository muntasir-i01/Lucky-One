import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart} from '@fortawesome/free-solid-svg-icons';





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
                  
                </div>
                <div className="cart-container">
                {/* <li>{c.name}</li> */}
                {cart.map(c => <SelectedCart name = {c.name}></SelectedCart>
                    )}
                    <h5>Selected Items:  </h5>
                    <button>Choose 1 For Me</button>
                <button>Choose Again</button>
                </div>
                
            </div>
        </div>
    );
};

function SelectedCart(props) {
    return (
        <div>
            <li>{props.name}</li>
            <p><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p>
        </div>
    )
}

export default Shop;