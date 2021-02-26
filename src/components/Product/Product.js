import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const{img, name, seller, price, stock }= props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img}></img>

            </div>

            <div className="product-name">
               
                <h4>{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <p>price: {price}</p>

                <p><small>onley {stock} left in stock</small></p>
                <button 
                onClick={()=>props.handleAddProduct(props.product)}
                className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>


            </div>
           
        </div>
    );
};

export default Product;