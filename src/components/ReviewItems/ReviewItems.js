import React from 'react';

const ReviewItems = (props ) => {
    // console.log(props)
    const {name ,quantity ,key, price} = props.product;
    const reviewItemStyles ={
        borderBottom:"1px solid lightgray",
        marginBottom:"5px",
        paddingBottom:"5px",
        marginLeft:"200px",
        borderRight:"1px solid lightgray",
        


    }
    return (
        <div style={reviewItemStyles}>
            
            <h4 className="product-name">  {name}</h4>
            <p>Quantity :{quantity}</p>
            <p>${price}</p>
            <button className="main-button"
            onClick={() =>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;