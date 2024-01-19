import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLinks from "./HeaderLinks.jsx";
import { CartItemsContext } from "@context/CartItemsContext";
import { useContext } from "react";

export default function Header() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const { itemsInCart } = useContext(CartItemsContext);
  const itemCount = Object.keys(itemsInCart).length;

  function handleMenuButtonClick() {
    setIsMenuDisplayed(!isMenuDisplayed);
  }

  return (
    <header className="main-header">
      <h1 className="header-title">
        <Link to="/">CityCube</Link>
      </h1>
      {/* Desktop menu, used for screens wider than 801px */}
      <nav className="desktop-menu">
        <HeaderLinks numItemsInCart={itemCount} />
      </nav>

      {/* Mobile menu, for screens less than or equal to 801px */}
      <div className="mobile-menu-container">
        <button className="menu-button" onClick={handleMenuButtonClick}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
        <nav
          onClick={handleMenuButtonClick}
          className={`mobile-menu${isMenuDisplayed ? " dropped" : ""}`}
        >
          <HeaderLinks numItemsInCart={itemCount} />
        </nav>
      </div>
    </header>
  );
}
