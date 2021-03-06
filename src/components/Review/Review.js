import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart , setCart] = useState([])

    const [orderPalced , setOrderplaced] = useState([false])

    const handlePlaceOrder = () => {
        setCart([])
        setOrderplaced(true)
        processOrder()
    }

   const removeProduct = (productkey) => {
    //    console.log('product removed clicked')
       const newCart =cart.filter(pd => pd.key!== productkey)
       setCart(newCart)
       removeFromDatabaseCart(productkey);
   }
    


    useEffect(() =>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)

       const cartProducts = productKeys.map(key =>{
           const product = fakeData.find(pd =>pd.key === key);
           product.quantity =savedCart[key];
           return product ;
       })
        // setCart(cartProducts)
        // console.log(cartProducts)
        setCart(cartProducts)
    



    },[])

   let thankYou ;
    if(orderPalced) {
       thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
           
            
           <div className="product-container">
           {
                cart.map((pd ,id) =><ReviewItems 
                key={id}
                    product={pd}
                     removeProduct={removeProduct}
                ></ReviewItems>)
            }
            {
                
                thankYou
            }

            
           </div>

           <div className="cart-container">

               <Cart cart={cart}>
                   <button onClick={handlePlaceOrder} className="main-button"> Place Order</button>
               </Cart>

           </div>
            
        </div>
    );
};

export default Review;