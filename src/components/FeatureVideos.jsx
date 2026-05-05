import "./FeatureVideos.css";

function FeatureVideos() {
  const features = [
    {
      video: "/feature1.mp4",
      title: "Copy to Figma",
      desc: "Download designs you like or copy it straight into Figma with our new Figma plugin.",
    },
    {
      video: "/feature2.mp4",
      title: "Save to collections",
      desc: "Collect your favorite designs and upload your own screenshots into one place.",
    },
    {
      video: "/feature3.mp4",
      title: "Leave comments",
      desc: "Take notes upon saving so you’ll never forget the context in the future.",
    },
  ];

  return (
    <div className="feature-section">

      <h1 className="feature-heading">
        From inspiration to creation.
      </h1>

      <div className="feature-grid">
        {features.map((item, i) => (
          <div className="feature-card" key={i}>

            {/* 🔥 OUTER CONTAINER (IMPORTANT FIX) */}
            <div className="feature-container">

              {/* VIDEO INSIDE */}
              <div className="feature-video">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

            </div>

            {/* TEXT */}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default FeatureVideos;