import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">

  
        <div className="topbar-left">
          <a href="#">Order Tracking</a>
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
        </div>

        
        <div className="topbar-center">
          <p>Enjoy free shipping on all orders this week!</p>
        </div>

     
        <div className="topbar-right">
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>

          <select>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
