import React from "react"
import "./producttable.css"
import { IProduct } from "../../Interfaces/homepageInterface.ts";
import ProductContainer from "./ProductContainer/ProductContainer.tsx";
const ProductTable = ({products}: {products: IProduct[]}) => {
    return (
    <div className="product-table">
        {products.length > 0 ? products.map(product => (
            <ProductContainer product={product} />
        )) : "Content Not Available"}
    </div>        
)}

export default ProductTable;