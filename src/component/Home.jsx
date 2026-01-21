import "../home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="tag"> HIGHEST QUALITY</span>
        <h1 className="desing">
        HIGH PERFORMANCE AND  <br /> ELEGANT DESIGN
        </h1>
        <p className="tach">
          Sleek designs, cutting-edge tech, unmatched performance for modern
          living
        </p>

        <button className="view">View Headphones</button>
      </div>
    </section> 
  );
};

export default Home;
