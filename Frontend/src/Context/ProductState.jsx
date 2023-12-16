import React, { createContext, useState } from "react";
import ProductContext from "./ProductContext";

// ProductState component to provide the product-related state
const ProductState = (props) => {
    // Define state variables using useState
    const [productState, setProductState] = useState({
        productName: "This is Product Name",
        price: "Product Price"
        // Add other properties as needed
    });

    return (
        <ProductContext.Provider value={{ productState, setProductState }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;
