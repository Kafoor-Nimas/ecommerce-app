// Context is used to share data across components without passing props manually at every level.
// We can store all the common variables and state variables at one place

import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

// Context provider function
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
