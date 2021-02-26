import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart.length)
    // const total = cart.reduce((total ,prd) => total+prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total>35){
        shipping= 0;
    }else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.44
    }

    const tax = Math.round(total/10);

    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3> Order summery</h3>
            <p>Items Order :{cart.length}</p>
            <p>Shipping Cost :{formateNumber(shipping)}</p>
            <p>tex + vet : {tax}</p>

            <p>Total price :{formateNumber(total + shipping + tax)}</p>
            
        </div>
    );
};

export default Cart;