import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">


        <div className="navbar-left">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </div>


        <ul className="navbar-menu">
          <li className="home">Home
            <span>
              ▾
            </span>
          </li>
          <li  className="home">Shop
            <span>
              ▾
            </span>
          </li>
          <li  className="home">Headphones</li>
          <li  className="home">Accessories</li>
          <li  className="home">Blog</li>
          <li  className="home">Contact</li>
        </ul>


        <div className="navbar-right">
          <i className="ri-search-2-line"></i>

          <div className="account">
            <i className="ri-user-line"></i>
            <span>Account</span>
          </div>

          <div className="icon-badge">
            <i className="ri-heart-line"></i>
            <span>0</span>
          </div>

          <div className="icon-badge">
            <i className="ri-shopping-cart-line"></i>
            <span>0</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
