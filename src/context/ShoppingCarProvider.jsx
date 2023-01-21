import { useState } from "react";
import { ShoppingCarContext } from "./ShoppingCarContext";

export const ShoppingCarProvider = ({ children }) => {
  const [car, setCar] = useState();

  return (
    <ShoppingCarContext.Provider value={{ car, setCar }}>
      {children}
    </ShoppingCarContext.Provider>
  );
};
