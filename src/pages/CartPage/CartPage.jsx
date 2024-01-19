// display items in cart here
import { useValue } from "@hooks/useValue";
import CartItem from "@components/CartItem/CartItem";
import { useHandler } from "@hooks/useHandler";

export default function CartPage() {
  const itemsInCart = useValue("itemsInCart");
  const onItemEdit = useHandler("onItemEdit");

  function editCartItem(newItem) {
    const newItems = itemsInCart.map((item) => {
      if (item.name === newItem.name) {
        return newItem;
      }
      return item;
    });

    onItemEdit(newItems);
  }

  return (
    <main>
      <h1 className="centered-text">Cart</h1>
      <div className="cart-items-div"></div>
      {((!itemsInCart || itemsInCart.length === 0) && (
        <p className="centered-text">No items are currently in your cart.</p>
      )) ||
        itemsInCart.map((item) => {
          return (
            <CartItem key={item.name} item={item} editCartItem={editCartItem} />
          );
        })}
    </main>
  );
}
