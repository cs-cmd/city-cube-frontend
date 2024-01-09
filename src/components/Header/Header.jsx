import './Header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="main-header">
      <h1 className="header">
        <Link className='hidden-link' to='/'>CityCube</Link>
      </h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}