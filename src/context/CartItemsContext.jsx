import { createContext, useState } from "react";

export const CartItemsContext = createContext();

export function CartItemsProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState({});

  function onItemChange(newItem) {
    // todo: incorrect adding from cart, needs to be fixed
    console.log(`new item: ${JSON.stringify(newItem)}`);
    console.log(`current items in cart: ${JSON.stringify(itemsInCart)}`);
    const newItemsInCart = {
      ...itemsInCart,
    };

    console.log(`copy of current items: ${JSON.stringify(newItemsInCart)}`);
    if (itemsInCart[newItem.name] === undefined) {
      newItemsInCart[newItem.name] = newItem;
    } else {
      const newItemToAdd = { ...itemsInCart[newItem.name] };
      newItemToAdd.amount += newItem.amount;
      newItemsInCart[newItem.name] = newItemToAdd;
    }
    console.log(`new items in cart: ${JSON.stringify(newItemsInCart)}`);
    setItemsInCart(newItemsInCart);
  }

  function removeItem(item) {
    const newItemsInCart = { ...itemsInCart };
    delete newItemsInCart[item.name];
    setItemsInCart(newItemsInCart);
  }

  return (
    <CartItemsContext.Provider
      value={{ itemsInCart, onItemChange, removeItem }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
