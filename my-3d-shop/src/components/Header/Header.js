import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <h2>Elegant 3D Collection</h2>
            <div >
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>                
                <a href="/about">About us</a>
            </div>
        </nav>
        </div>
    );
};

export default Header;