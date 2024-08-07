import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    imgSrc: string;
    title: string;
    price: string;
    oldPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, title, price, oldPrice }) => {
    return (
        <div className="product-card">
            <img src={imgSrc} alt={title} className="product-image" />
            <div className="product-info">
                <h4>{title}</h4>
                <p className="price">{price}</p>
                <p className="old-price">{oldPrice}</p>
            </div>
        </div>
    );
}

export default ProductCard;
