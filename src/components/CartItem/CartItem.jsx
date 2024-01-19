import "./CartItem.css";
import { useState, useEffect } from "react";

export default function CartItem({ item, editCartItem }) {
  function handleButtonClick(changeVal) {
    const newAmount = item.amount + changeVal;
    const newItem = {
      ...item,
      newAmount,
    };

    editCartItem(newItem);
  }
  return (
    <div className="cart-items">
      <h2>{item.name}</h2>
      {/* <img src={imgSrc} alt={item.name} /> */}
      <p>${item.price}</p>
      <p>Quantity: {item.amount}</p>
    </div>
  );
}
