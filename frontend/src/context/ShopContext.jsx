// Context is used to share data across components without passing props manually at every level.
// We can store all the common variables and state variables at one place

import { createContext } from "react";

export const ShopContext = createContext();

// Context provider function
const ShopContextProvider = (props) => {
  const value = {};

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
