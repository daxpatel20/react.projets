import "./clients.css";

const Clients = () => {
  return (
    <div className="clients">
      <h2>Our Happy Clients</h2>
      <p className="subtitle">
        See what our satisfied customers have to say about our electronic accessories.
      </p>

      <div className="cards">
        <div className="card">
          <p className="stars">★★★★★</p>
          <h4>Best Customer Service</h4>
          <p className="review">
            I've been using this product for a month now, and I've had no issues.
            The customer service is top-notch, and the product is exactly as described.
          </p>
          <strong>John Malkovich</strong>
          <span>California, USA</span>
        </div>

        <div className="card">
          <p className="stars">★★★★★</p>
          <h4>Best Customer Service</h4>
          <p className="review">
            I've been using this product for a month now, and I've had no issues.
            The customer service is top-notch, and the product is exactly as described.
          </p>
          <strong>Jessica Lindström</strong>
          <span>California, USA</span>
        </div>

        <div className="card">
          <p className="stars">★★★★★</p>
          <h4>Best Customer Service</h4>
          <p className="review">
            I've been using this product for a month now, and I've had no issues.
            The customer service is top-notch, and the product is exactly as described.
          </p>
          <strong>John Malkovich</strong>
          <span>California, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
