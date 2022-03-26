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
                
                <h5>Selected Items:  </h5> <br />
                {cart.map(c => <SelectedCart name = {c.name} img = {c.img}></SelectedCart>
                    )}
                    
                    <button className='btn-order'>Choose 1 For Me</button>
                <button className='btn-order'>Choose Again</button>
                </div>
                
            </div>
        </div>
    );
};

function SelectedCart(props) {
    const {name, img} = props;
    return (
        <div className='addedItems'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p>
        </div>
    )
}

export default Shop;