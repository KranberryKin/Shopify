import React from "react";
import "./productcontainer.css";
import { IProduct } from "../../../Interfaces/homepageInterface";

const ProductContainer = ({product} : {product: IProduct}) => {
    return         (
    <div className="product-container">
        <p>
            {product.productName}
        </p>
        <p>
            ${product.productPrice}
        </p>
    </div>
)}

export default ProductContainer;