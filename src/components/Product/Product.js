import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {

    // console.log(props)
    
    const{img, name, seller, price, stock ,key }= props.product;
    

    return (
        <div className="product">
            <div className="product-img">
                <img src={img}/>
                

            </div>

            <div className="product-name">
               
                <h4> <Link to={"/" + key } > {name}</Link> </h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <p>price: {price}</p>
               

                <p><small>only {stock} left in stock</small></p>
                {
                   props.showAddTOCart && <button 
                    onClick={()=>props.handleAddProduct(props.product)}
                    className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                }
                
            </div>
           
        </div>
    );
};

export default Product;