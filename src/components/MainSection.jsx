import { useState, useEffect } from "react";
import "./MainSection.css";

function MainSection() {
  const [view, setView] = useState("ios");

  // 🔄 AUTO SWITCH (smooth, no manual interaction)
  useEffect(() => {
    const interval = setInterval(() => {
      setView((prev) => (prev === "ios" ? "web" : "ios"));
    }, 3200); // slightly slower = more premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-box">

        {/* ONLY IMAGE (NO BUTTONS, NO EXTRA UI) */}
        <div className="image-container">

          <img
            src="/product-cover-ios.webp"
            className={`image ${view === "ios" ? "active" : ""}`}
            alt=""
          />

          <img
            src="/product-cover-web.webp"
            className={`image ${view === "web" ? "active" : ""}`}
            alt=""
          />

        </div>

      </div>
    </div>
  );
}


export default MainSection;