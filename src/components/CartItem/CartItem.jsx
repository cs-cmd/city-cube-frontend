import "./CartItem.css";
import { useValue } from "@hooks/useValue";

export default function CartItem() {
  const cartItems = useValue("itemsInCart");

  const cartPageItems = cartItems.map((item) => {
    return (
      <div className="cart-item" key={item.name}>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
      </div>
    );
  });

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          {cartPageItems}
        </div>
      ))}
    </div>
  );
}
