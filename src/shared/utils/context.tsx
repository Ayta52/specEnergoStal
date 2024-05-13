import React, { createContext, useState } from 'react';

interface ProductDescriptionContextType {
  index: number;
  setIndex: (index: number) => void;
}

export const ProductDescriptionContext = createContext<ProductDescriptionContextType>({
  index: 0,
  setIndex: () => {},
});

export const ProductDescriptionProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <ProductDescriptionContext.Provider value={{ index, setIndex }}>
      {children}
    </ProductDescriptionContext.Provider>
  );
};