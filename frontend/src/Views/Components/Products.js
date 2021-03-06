import { Rate } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
    const { product } = props;
    return (
        <li key={product._id} className="listsp">
            <div className="product" >
                <div className="image-pro">
                    <Link to={`/product/${product._id}`}>
                        <img className="product-image" src={product.image} alt="product" />
                    </Link>
                </div>
                <div className="product-name">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">Giá: {product.price} $</div>
                <div className="product-rating">{product.rating} Stars
                                            <Rate value={product.rating} />
                </div>
            </div>
        </li>
    );
}

export default Product;