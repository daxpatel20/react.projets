import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">

                <div className="footer-col">
                    <div className="navbar-left">
                        <img src="/images/logo-22.png" alt="logo" className="logo" />
                    </div>
                    <p><strong>Address:</strong> 1234 Fashion Street, Suite 567, New York, NY</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <p><strong>Email:</strong> info@example.com</p>
                </div>


                <div className="footer-col">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>Accessibility Statement</li>
                        <li>Your Orders</li>
                        <li>Returns & Replacements</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Refund and Returns Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Cookie Settings</li>
                        <li>Help Center</li>
                    </ul>
                </div>


                <div className="footer-col">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>Careers for Fynode</li>
                        <li>About Fynode</li>
                        <li>Investor Relations</li>
                        <li>Fynode Devices</li>
                        <li>Customer Reviews</li>
                        <li>Social Responsibility</li>
                        <li>Store Locations</li>
                    </ul>
                </div>


                <div className="footer-col">
                    <h4>Sign Up for Email</h4>
                    <p className="signup-text">
                        Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
                    </p>

                    <div className="email-box">
                        <input type="email" placeholder="Enter your email address" />
                        <button>SEND</button>
                    </div>

                    <p className="terms">
                        By subscribing you agree to our <span>Terms & Conditions</span> and{" "}
                        <span>Privacy & Cookies Policy</span>.
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright © 2026 <strong>Fynode</strong>. All rights reserved.</p>

                <div className="payments">

                    <img src="//images/payment.png" alt="" />
                    <img src="//images/payment2.png" alt="" />
                    <img src="//images/payment3.png" alt="" />
                    <img src="//images/payment4.png" alt="" />
                    <img src="//images/payment5.png" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

