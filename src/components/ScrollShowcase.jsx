import { useEffect, useRef, useState } from "react";
import "./ScrollShowcase.css";

function ScrollShowcase() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hasSpread, setHasSpread] = useState(false);

  useEffect(() => {
  let target = 0;
  let current = 0;

  const handleScroll = () => {
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const total = windowHeight * 2;
    const raw = Math.min(Math.max(-rect.top, 0), total);

    target = raw / total;

    if (target > 0.4) {
      setHasSpread(true);
    }
  };

  const animate = () => {
    // 🔥 SMOOTH INTERPOLATION
    current += (target - current) * 0.08;

    setProgress(current);
    requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", handleScroll);
  animate();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const ease = (t) => 1 - Math.pow(1 - t, 3);
  
const rawSpread = ease(Math.min(progress / 0.4, 1));

// smooth lock instead of jump
const spread = hasSpread
  ? 1 - Math.pow(1 - rawSpread, 3)  // smooth finish
  : rawSpread;

  const step1 = Math.min(progress / 0.33, 1);
  const step2 = Math.min(Math.max((progress - 0.33) / 0.33, 0), 1);
  const step3 = Math.min(Math.max((progress - 0.66) / 0.34, 0), 1);

  return (
    <div ref={ref} className="scroll-section">
      <div className="sticky-box">

        <p className="subtitle">A growing library of</p>

        <h1
          className="number"
          style={{
            transform: `translateY(${(1 - step1) * 120}px)`,
            opacity: step1,
          }}
        >
          1,642 apps
        </h1>

        {step1 > 0.98 && (
          <h1
            className="number"
            style={{
              transform: `translateY(${(1 - step2) * 120}px)`,
              opacity: step2,
            }}
          >
            621,500 screens
          </h1>
        )}

        {step2 > 0.98 && (
          <h1
            className="number"
            style={{
              transform: `translateY(${(1 - step3) * 120}px)`,
              opacity: step3,
            }}
          >
            142,200 flows
          </h1>
        )}

        <FloatingIcons spread={spread} />

      </div>
    </div>
  );
}


function FloatingIcons({ spread }) {
  const icons = [
    { src: "/chatgpt.webp", x: 40, y: -220 },

    { src: "/dropbox.webp", x: -540, y: -80 },
    { src: "/mailchimp.webp", x: -540, y: 140 },

    { src: "/airbnb.webp", x: 260, y: 320 },

    { src: "/appletv.webp", x: 460, y: 260 },

    { src: "/shop.webp", x: -260, y: 260 },

    { src: "/retro.webp", x: -220, y: -200 },

    { src: "/wise.webp", x: 260, y: -260 },

    { src: "/cosmos.webp", x: 520, y: 80 },

    { src: "/loom.webp", x: -80, y: 180 },
  ];

  return (
    <>
      {icons.map((icon, i) => (
        <div
          key={i}
          className="icon-wrapper"
          style={{
            transform: `
              translate(-50%, -50%)
              translate(${icon.x * spread}px, ${icon.y * spread}px)
            `,
            opacity: spread,
          }}
        >
          <div className={`float-layer ${spread > 0.95 ? "float-on" : ""} f${i}`}>
            <img
              src={icon.src}
              alt=""
              className="floating-icon"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </>
  );
}
export default ScrollShowcase;