import "./Trusted.css";

function Trusted() {
  return (
    <div className="trusted">
      <p>Trusted by design teams at</p>

      <div className="logos">

        <div className="logo-item">
           
          <span>Uber</span>
        </div>

        <div className="logo-item">
          <div className="dot"></div>
          <span>headspace</span>
        </div>

        <div className="logo-item">
          <img src="/meta.svg" alt="" />
          <span>Meta</span>
        </div>

        <div className="logo-item">
          <img src="/airbnb.svg" alt="" />
          <span>airbnb</span>
        </div>

        <div className="logo-item">
          <span>Revolut</span>
        </div>

        <div className="logo-item">
          <span>Metalab</span>
        </div>

        <div className="logo-item">
          <img src="/pinterest.svg" alt="" />
          <span>Pinterest</span>
        </div>

      </div>
    </div>
  );
}

export default Trusted;