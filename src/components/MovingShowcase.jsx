import "./MovingShowcase.css";

function MovingShowcase() {
  const items = [
    { title: "Login", img: "/login.webp" },
    { title: "Profile", img: "/profile.webp" },
    { title: "Wallet", img: "/wallet.webp" },
    { title: "Welcome", img: "/welcome.webp" },
    { title: "Account Setup", img: "/settings.webp" },
    { title: "Home", img: "/home.webp" },
    { title: "Subscription & Paywall", img: "/subscription-paywall.webp" },
  ];

  return (
    <div className="section">

      {/* 🔥 STATIC HEADING */}
      <h1 className="heading">
        Find design patterns <br /> in seconds.
      </h1>

      {/* 🔥 MOVING STRIP */}
      <div className="marquee">
        <div className="track">

          {[...items, ...items].map((item, i) => (
            <div className="card" key={i}>
              <p className="label">{item.title}</p>

              <div className="image-box">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default MovingShowcase;