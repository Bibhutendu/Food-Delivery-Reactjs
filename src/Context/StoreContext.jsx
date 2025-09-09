import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [cartItems, setcartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      {
        /*...prev copies the old state in a new object 
        and make changes because if we do changes directly to the cartItems 
        then it may not reflect on UI because it works asynchonously.*/
      }
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])
  const contextvalue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setcartItems
  };
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
