import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeaderLinks from './HeaderLinks.jsx';

export default function Header({itemsInCart = 0}) {
  const [ isMenuHidden, setIsMenuHidden ] = useState(true);

  function handleMenuButtonClick() {
    setIsMenuHidden(!isMenuHidden);
  }

  return (
    <header className="main-header">
      <h1 className="header-title">
        <Link className='hidden-link' to='/'>CityCube</Link>
      </h1>
      {/* Desktop menu, used for screens wider than 801px */}
      <nav className='desktop-menu'>
        <HeaderLinks />
      </nav>

      {/* Mobile menu, for screens less than or equal to 801px */}
      <div className='mobile-menu-container'>
        <button className='menu-button' onClick={handleMenuButtonClick}>Menu</button>
        <nav onClick={handleMenuButtonClick} className={`mobile-menu${isMenuHidden ? ' hidden' : ''}`}>
          <HeaderLinks />
        </nav>
      </div>
    </header>
  )
}