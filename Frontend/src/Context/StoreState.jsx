import React, { createContext, useState } from "react";
import StoreContext from "./StoreContext"

// StoreState component to provide the store-related state
const StoreState = (props) => {
    // Define state variables using useState
    const [StoreState, setStoreState] = useState({
       
        storeId: "id"

    });

    return (
        <StoreContext.Provider value={{ StoreState, setStoreState }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreState;
