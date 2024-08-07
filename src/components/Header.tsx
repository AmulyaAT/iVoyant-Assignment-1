import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjWib7blNe9uW7I3qEkULzNh2xVph-y8D6RIMYJyTnW6yTe5HW" alt="Logo" />
                <span><strong>P I X O R U S</strong><br/>Customer Satisfaction</span>
            </div>
            <input type="text" className="search" placeholder="Search product" />
            <div className="user-info">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRL0dcSlhGLgAwm9wTl29FeOlfAodxaFjGELSxv0qSIc1yjATVl" alt="Profile" className="profile-pic" />
                <span>Diego Morata</span>
                <span>Cart</span>
                <span>Orders</span>
            </div>
        </header>
    );
}

export default Header;
