import React from "react";
import "./Card.css";

function Card() {
    return (
    <div>
        <div className="productCard">
            <img className="" src="/images/happycat.jpg" alt="" />
            <h1>Product Title: </h1> 
            <h2>Product Price: </h2>
            <p>Product Description: </p>
        </div>
    </div>
    );
}
export default Card;