import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLinks from "./HeaderLinks.jsx";

export default function Header({ itemsInCart = 0 }) {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

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
        <HeaderLinks itemsInCart={itemsInCart} />
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
          <HeaderLinks itemsInCart={itemsInCart} />
        </nav>
      </div>
    </header>
  );
}
