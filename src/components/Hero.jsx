import { useState, useEffect } from "react";
import "./Hero.css";

const icons = [
  "/airbnb.webp",
  "/dropbox.webp",
  "/uber.webp",
  "/wise.webp",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* ICON STACK */}
      <div className="icon-stack">
        {icons.map((icon, i) => {
          const position = (i - index + icons.length) % icons.length;

          return (
            <img
              key={i}
              src={icon}
              alt=""
              className={`stack-icon pos-${position}`}
            />
          );
        })}
      </div>

      {/* TEXT */}
      <h1 className="hero-title">
        Discover real-world <br />
        design inspiration.
      </h1>

      <p className="hero-subtext">
        Featuring over 1,000 iOS & Web apps, and 400 sites — <br />
        New content weekly.
      </p>

      {/* BUTTONS */}
      <div className="hero-buttons">
        <button className="primary-btn">Join for free</button>
        <button className="secondary-btn">See our plans →</button>
      </div>

    </section>
  );
}

export default Hero;