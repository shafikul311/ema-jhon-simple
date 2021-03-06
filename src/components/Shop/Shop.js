import React, { useEffect } from 'react';
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,15)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);
        const previousCart = productkeys.map( existingkey => {
            const product = fakeData.find(pd => pd.key === existingkey)
            product.quantity = savedCart[existingkey];
            return product;
        })
        // console.log( previousCart)
        setCart(previousCart)

    },[])
    
    
    
    const handleAddProduct = (product)=>{
        const toBeAddedKey = product.key;

        const sameProduct = cart.find(pd =>pd.key === product.key)
        let count = 1;
        let newCart ;
        if(sameProduct){
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.find(pd =>pd.key !== toBeAddedKey);
            newCart = [...others ,sameProduct];
        }

        else{
            product.quantity = 1;
            newCart = [...cart , product]
        }
        
       
     
        setCart(newCart);

        addToDatabaseCart(product.key , count)

    }
    
    return (
        <div className="twin-container" >
            <div className="product-container">
            
                {
                products.map((pd,id) => <Product 
                    key={id}
                    showAddTOCart={true}

                    handleAddProduct={handleAddProduct}
                    product={pd}></Product>)
                }
                
            
            </div>


            <div className="cart-container">
               <Cart cart={cart}>
               <Link to="/review">
            <button className="main-button">Review Order</button>
            </Link>
               </Cart>

            </div>
            
          
        </div>
    );
};

export default Shop;