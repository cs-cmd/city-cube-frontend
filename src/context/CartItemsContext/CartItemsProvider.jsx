import CartItemsContext from "./CartItemsContext";
import { useState, useCallback } from 'react';

export default function CartItemsProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState({});

  const removeItem = useCallback((item) => {
    const newItemsInCart = { ...itemsInCart };
    delete newItemsInCart[item.name];
    setItemsInCart(newItemsInCart);
  }, [itemsInCart]);

  const onItemChange = useCallback((newItem) => {

    // todo: incorrect adding from cart, needs to be fixed
    console.log(`newItem: ${JSON.stringify(newItem)}`);
    console.log(`itemsInCart: ${JSON.stringify(itemsInCart)}`);

    const newItemsInCart = {
      ...itemsInCart,
    };

    console.log(`newItemsInCart: ${JSON.stringify(newItemsInCart)}`);

    if (itemsInCart[newItem.name] === undefined) {
      newItemsInCart[newItem.name] = newItem;
    } else {
      const newItemToAdd = { ...itemsInCart[newItem.name] };
      newItemToAdd.amount += newItem.amount;
      newItemsInCart[newItem.name] = newItemToAdd;
    }

    console.log(`newItemsInCart post-add: ${JSON.stringify(newItemsInCart)}`);
    setItemsInCart(newItemsInCart);
  }, [itemsInCart, setItemsInCart]);

  return (
    <CartItemsContext.Provider
      value={{ itemsInCart, onItemChange, removeItem }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}