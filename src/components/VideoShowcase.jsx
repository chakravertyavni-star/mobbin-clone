import "./VideoShowcase.css";

function VideoShowcase() {
  return (
    <div className="video-section">

      {/* 🔥 HEADING */}
      <h1 className="video-heading">
        Explore entire user <br /> journeys with flows.
      </h1>

      {/* 🔥 VIDEO GRID */}
      <div className="video-grid">

        <div className="video-card">
          <div className="phone-frame">
            <video src="/video1.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

        <div className="video-card">
          <div className="phone-frame">
            <video src="/video2.mp4" autoPlay loop muted playsInline />
          </div>
        </div>

      </div>

      {/* 🔥 TEXT SECTION UNDER */}
      <div className="video-info">

        <div className="info-block">
          <h3>Videos</h3>
          <p>
            Experience flows the way they were meant to be experienced,
            complete with transitions, micro-interactions, and animations.
          </p>
        </div>

        <div className="info-block">
          <h3>Prototype mode</h3>
          <p>
            Walk through flows, step by step, by using the interactive hotspots
            at your own preferred pace.
          </p>
        </div>

      </div>

    </div>
  );
}

export default VideoShowcase;