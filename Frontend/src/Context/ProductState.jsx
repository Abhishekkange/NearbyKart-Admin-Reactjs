import React, { createContext, useState } from "react";
import ProductContext from "./ProductContext";

// ProductState component to provide the product-related state
const ProductState = (props) => {
    // Define state variables using useState
    const [productState, setProductState] = useState({
        image:"image",
        productName: "",
        price: "",
        category:"",
        subcategory:"",
        brand:"",
        description:"",
        shortdescription:"",
        colorSizes:{}

    });

    return (
        <ProductContext.Provider value={{ productState, setProductState }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;
