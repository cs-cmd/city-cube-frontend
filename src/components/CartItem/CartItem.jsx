import "./CartItem.css";

export default function CartItem({ item, onItemChange }) {
  function handleButtonClick(amount) {
    if (item.amount + amount <= 0) {
      // delete item from list
      return;
    }

    const newItem = {
      ...item,
      amount,
    };
    onItemChange(newItem);
  }

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <div className="total-item-price-line">
        <p>
          ${item.price}&nbsp;
          <span className="subscript">x {item.amount}</span>
        </p>

        <h3>${item.price * item.amount}</h3>
      </div>
      <div className="adjust-amount-buttons">
        <button onClick={() => handleButtonClick(-1)} className="page-button">
          -
        </button>
        <button onClick={() => handleButtonClick(1)} className="page-button">
          +
        </button>
      </div>
      <button className="page-button secondary" onClick={() => {}}>
        Remove
      </button>
    </div>
  );
}
