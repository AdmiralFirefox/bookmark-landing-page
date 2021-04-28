import React from "react";
import WebLogo from "../../assets/logo-active.svg";

function FooterTwo() {
  return (
    <div className="footertwo-wrapper">
      <div className="footertwo-content">
        <div className="nav-links-wrapper">
          <div>
            <img src={WebLogo} alt="Web Logo" />
          </div>
          <div className="nav-links">
            <div>
              <a href="/">Features</a>
            </div>
            <div>
              <a href="/">Pricing</a>
            </div>
            <div>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div>
            <a href="/">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          <div>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTwo;
