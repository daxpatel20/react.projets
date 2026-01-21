import "./video.css";

const Video = () => {
  return (
    <div className="soud">
      <video autoPlay muted loop playsInline>
        <source src="/videos/video.mp4" type="" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <span className="small-text">Highest Quality</span>

        <h1>
          Redefine Your Sound <br />
          with Precision Microphones
        </h1>

        <p>Innovative tech, timeless design, ultimate experience.</p>

        <button>Shop Now →</button>
      </div>
    </div>
  );
};

export default Video;
