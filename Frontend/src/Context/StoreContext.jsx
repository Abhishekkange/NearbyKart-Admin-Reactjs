// StoreContext.js
import React, { createContext, useState } from 'react';

const StoreContext = createContext();

export const StoreStateProvider = ({ children }) => {
  const [storeId, setStoreId] = useState('KangeCollection'); // Replace 'new' with your default value

  return (
    <StoreContext.Provider value={{ storeId, setStoreId }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
