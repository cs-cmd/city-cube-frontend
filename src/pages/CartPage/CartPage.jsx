// display items in cart here
import { useValue } from "@hooks/useValue";
import MenuItem from "@components/MenuItem/MenuItem";

export default function CartPage() {
  const itemsInCart = useValue("itemsInCart");

  function editCartItem(newItem) {}

  return (
    <main>
      <h1 className="centered-text">Cart</h1>
      <div className="cart-items-div"></div>
      {((!itemsInCart || itemsInCart.length === 0) && (
        <p className="centered-text">No items are currently in your cart.</p>
      )) ||
        itemsInCart.map((item) => {
          return (
            <MenuItem key={item.name} {...item} itemAddHandler={editCartItem} />
          );
        })}
    </main>
  );
}
