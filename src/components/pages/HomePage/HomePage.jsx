import ImageAndDesc from "../../ImageAndDesc/ImageAndDesc";
import "./HomePage.css";

const homePageImageContent = [
  {
    imgSrc: new URL("/images/factory-images/factory2.jpg", import.meta.url)
      .href,
    desc: "Late-stage production of warehouse inventory",
    text: "Made from exotically-sourced nutrients from around the world, CityCube strives to nourish the City and neightboring boroughs.",
  },
  {
    imgSrc: new URL("/images/founders/founders1.jpeg", import.meta.url).href,
    desc: "The founders, Raz Keenz and Mohammad Kapoor, in-front of their first factory",
    text: "Designed from the ground up by CS Financial's own son, Raz Keenz, alongside friend Mohammad Kapoor, built a culinary empire spanning the City.",
  },
  {
    imgSrc: new URL("/images/food-images/food1.jpg", import.meta.url).href,
    desc: "A staple dish, the Orange Meringue Block",
    text: "Made efficiently from natural and artificial flavorings and nutrients sourced from around the world, CityCube's unit of food, the Block, is calorie-dense and stable, capable of filling a grown man in just two servings!",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="image-section">
        <div className="blur-container">
          <h1 className="heading">Welcome to CityCube!</h1>
          <p>A quick-eats provider for the People of the City.</p>
          <p>A staple of City cuisine and culture.</p>
          <p>A paragon of high-quality food and speedy delivery.</p>

          <h1>Never worry about the complexity of food again!</h1>

          <a href="/menu" className="page-button-link hidden-link">
            Order now!
          </a>
          <div className="transparant-fade" />
        </div>
      </section>

      <section className="home-page-image-display">
        {homePageImageContent.map((item, index) => (
          <ImageAndDesc
            imgSrc={item.imgSrc}
            key={index}
            desc={item.desc}
            text={item.text}
          />
        ))}
      </section>
    </main>
  );
}
