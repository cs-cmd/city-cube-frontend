// display items in cart here
import CartItem from "@components/CartItem/CartItem";
import { CartItemsContext } from "@context/CartItemsContext";
import { useContext } from "react";

export default function CartPage() {
  const { itemsInCart, onItemChange } = useContext(CartItemsContext);

  const itemsInCartPageItems = Object.keys(itemsInCart).map((key) => {
    return (
      <CartItem key={key} item={itemsInCart[key]} onItemChange={onItemChange} />
    );
  });
  return (
    <main>
      <h1 className="centered-text">Cart</h1>
      <div className="cart-items-div"></div>
      {(itemsInCartPageItems.length === 0 && (
        <p className="centered-text">No items are currently in your cart.</p>
      )) ||
        itemsInCartPageItems}
    </main>
  );
}
