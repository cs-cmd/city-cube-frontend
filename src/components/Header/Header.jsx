import './Header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="main-header">
      <h1 className="header">CityCube</h1>
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
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}