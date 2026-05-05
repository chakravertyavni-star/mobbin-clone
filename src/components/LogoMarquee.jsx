import "./LogoMarquee.css";

function Row({ direction = "left", speed = 25 }) {
  const logos = [
    { img: "/coinbase.webp", name: "Coinbase" },
    { img: "/wise.webp", name: "Wise" },
    
    { img: "/airbnb.webp", name: "Airbnb" },
    { img: "/uber.webp", name: "Uber" },
    { img: "/nike.webp", name: "Nike" },
    { img: "/pinterest.webp", name: "Pinterest" },
    { img: "/chatgpt.webp", name: "ChatGPT" },
 
    { img: "/loom.webp", name: "Loom" },
    { img: "/creme.webp", name: "Creme" },
    { img: "/mailchimp.webp", name: "Mailchimp" },
    
    { img: "/spotify.webp", name: "Spotify" },
    { img: "/appletv.webp", name: "Apple TV" },
    { img: "/shop.webp", name: "Shop" },
    { img: "/cosmos.webp", name: "Cosmos" },
    { img: "/retro.webp", name: "Retro" },
    { img: "/notion.webp", name: "Notion" },
    { img: "/dropbox.webp", name: "Dropbox" },
  ];

  // duplicate for seamless loop
  const full = [...logos, ...logos];

  return (
    <div className="marquee-row">
      <div
        className={`marquee-track ${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {full.map((logo, i) => (
          <div className="logo-item" key={i}>
            <img src={logo.img} alt={logo.name} />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="marquee-section">

      <h1 className="marquee-heading">
        Never run out of inspiration again.
      </h1>

      <p className="marquee-sub">
        Use Mobbin for free as long as you like or get full access
        with any of our paid plans.
      </p>

      <div className="marquee-cta">
        <button className="cta-primary">Join for free</button>
        <button className="cta-secondary">
          See our plans →
        </button>
      </div>

      <div className="marquee-rows">
        <Row direction="left" speed={35} />
        <Row direction="right" speed={30} />
        <Row direction="left" speed={40} />
      </div>

      

    </section>
  );
}