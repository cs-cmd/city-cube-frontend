import PhotoCarousel from '../../PhotoCarousel/PhotoCarousel';
import './HomePage.css';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <main className="home-page">
      <section className='image-section'>
        <div className='blur-container'>
          <h1 className='heading'>Welcome to CityCube!</h1>
          <p>A quick-eats provider for the People of the City.</p>
          <p>A staple of City cuisine and culture.</p>
          <p>A paragon of high-quality food and speedy delivery.</p>
            
          <h1>Never worry about the complexity of food again!</h1>
          <Link to='/menu' className='page-button-link'>Order now!</Link>
        </div>
      </section>

      <section className='factory-carousel'>
        <PhotoCarousel />
      </section>
    </main>
  )
}