import "./CartItem.css";

export default function CartItem({ item, onItemEdit }) {
  function handleButtonClick(changeVal) {
    const newItem = {
      ...item,
      amount: item.amount + changeVal,
    };
    onItemEdit(newItem);
  }

  return (
    <div className="cart-items">
      <h2>{item.name}</h2>
      {/* <img src={imgSrc} alt={item.name} /> */}
      <p>${item.price}</p>
      <p>Quantity: {item.amount}</p>
      <button onClick={() => handleButtonClick(1)}>Increase</button>
    </div>
  );
}
