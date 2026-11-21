
import { useState, useEffect } from "react";

import cake from "../../assets/cake.jpg";
import cake2 from "../../assets/cake2.jpg";
import cake3 from "../../assets/cake3.jpg";
import cake4 from "../../assets/cake4.jpg";
import cake5 from "../../assets/cake5.jpg";
import cake6 from "../../assets/cake6.jpg";

const images = [cake, cake2, cake3, cake4, cake5, cake6];

function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section id="home" className="home-section">

      {/* Background Slider */}
      <img
        key={currentImage}
        src={images[currentImage]}
        alt="Fresh bakery treats"
        className="home-slide"
      />

      {/* Dark Overlay */}
      <div className="home-overlay"></div>

      {/* Home Content */}
      <div className="home-content">
     <h1 className="home-title">
  <span>Welcome to</span>
  <span>Noor's Bake Box</span>
</h1>

        <h2>Freshly Baked Happiness in Every Bite!</h2>

        <p>
          Discover delicious homemade brownies, traditional
          Nankhatai, and freshly baked rolls. Every treat is
          prepared with love and care.
        </p>

        <a href="#menu" className="home-btn">
          Explore Our Menu
        </a>

        {/* Slider Indicators */}
        <div className="slider-dots">
          {images.map((image, index) => (
            <button
              key={index}
              className={currentImage === index ? "active" : ""}
              onClick={() => setCurrentImage(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export default HomeSection;
