import React from "react"
import "./homepage.css"
import { HOMEPAGE_CONSTANTS } from "../../Constants/HOMEPAGE_CONSTANTS.ts";
import { ProductTable } from "../../Compoents/index.js";



const HomePage = () => {
    const { products } = HOMEPAGE_CONSTANTS;
    return <div>
        <header>
            <h1>
                Home Page
            </h1>
        </header>
        <body>
            <ProductTable products={products} />
        </body>
        <footer>
            More Content Coming!
        </footer>
    </div>;
}

export default HomePage; 