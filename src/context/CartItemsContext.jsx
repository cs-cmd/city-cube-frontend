import { createContext, useState } from "react";

export const CartItemsContext = createContext();

export function CartItemsProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState({});

  function onItemChange(newItem) {
    const newItemsInCart = {
      ...itemsInCart,
    };

    if (itemsInCart[newItem.name] === undefined) {
      newItemsInCart[newItem.name] = newItem;
    } else {
      const newItemToAdd = { ...itemsInCart[newItem.name] };
      newItemToAdd.amount += newItem.amount;
      newItemsInCart[newItem.name] = newItemToAdd;
    }
    setItemsInCart(newItemsInCart);
  }

  return (
    <CartItemsContext.Provider value={{ itemsInCart, onItemChange }}>
      {children}
    </CartItemsContext.Provider>
  );
}
