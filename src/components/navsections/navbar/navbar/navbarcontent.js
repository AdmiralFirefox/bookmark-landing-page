import React from "react";
import "../../../../App.scss";
import Button from "@material-ui/core/Button";

function NavbarContent({ show, close }) {
  return (
    <div>
      <div
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
        className="navbar-wrapper"
      >
        <div className="navbar-content">
          <div className="nav_components">
            <a href="/" onClick={close}>
              Features
            </a>

            <a href="/" onClick={close}>
              Pricing
            </a>

            <a href="/" onClick={close}>
              Contact
            </a>

            <div className="mobile_button_wrapper">
              <a href="/" onClick={close}>
                <Button variant="outlined" id="mobile_button">
                  Log In
                </Button>
              </a>
            </div>
          </div>
          <div className="navbar-social-links">
            <div>
              <a href="/">
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarContent;
