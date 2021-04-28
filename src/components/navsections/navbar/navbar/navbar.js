import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../../../App.scss";
import { Turn as Hamburger } from "hamburger-react";
import NavbarContent from "../navbar/navbarcontent";
import BookMarkLogo from "../../../assets/logo-bookmark.svg";
import BookmarkLogoActive from "../../../assets/logo-active.svg";
import Button from "@material-ui/core/Button";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 701 });
  document.body.style.overflowY = "auto";
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return isMobile ? children : null;
};

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const closeMobileMenu = () => setNavbar(!navbar);
  const [isOpen, setOpen] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navbar]);

  /* Comment/Uncomment the above useEffect function to toggle overflow hidden while the sidebar is active */

  //For Desktop Dropdown
  useEffect(() => {
    window.onclick = (event) => {
      let dropdowns = document.getElementsByClassName(
        "desktop-dropdown-content"
      );
      for (let i = 0; i < dropdowns.length; i++) {
        let match = false,
          dropdown = dropdowns[i];
        if (event.target.classList.contains("desktop-dropbtn")) {
          for (let c of dropdown.classList.values()) {
            if (
              c.indexOf("menu-") === 0 &&
              event.target.classList.contains(c)
            ) {
              match = true;
              break;
            }
          }
        }
        if (match) {
          dropdown.classList.add("show");
        } else {
          dropdown.classList.remove("show");
        }
      }
    };
  });

  const changeBackground = () => {
    if (window.scrollY >= 35) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <Desktop>
        <div
          className={
            background
              ? "app-bar-desktop-wrapper-active"
              : "app-bar-desktop-wrapper"
          }
        >
          <div
            className={
              background ? "desktop-web-name-active" : "desktop-web-name"
            }
          >
            <div>
              {background ? (
                <img src={BookmarkLogoActive} alt="Bookmark Logo" />
              ) : (
                <img src={BookMarkLogo} alt="Bookmark Logo" />
              )}
            </div>
          </div>
          <div
            className={
              background ? "desktop-navlinks-active" : "desktop-navlinks"
            }
          >
            <div>
              <a href="/">Features</a>
            </div>

            <div>
              <a href="/">Pricing</a>
            </div>

            <div>
              <a href="/">Contact</a>
            </div>

            <div>
              <a href="/">
                <Button
                variant="outlined"
                  id={
                    background ? "desktop-button-active" : "desktop-button"
                  }
                >
                  Sign In
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div>
          <div className={navbar ? "app-bar-active" : "app-bar"}>
            <div className="app-bar-content-wrapper">
              <div className="app-bar-content">
                <div>
                  <img src={BookmarkLogoActive} alt="Bookmark Logo" />
                </div>
              </div>
              <div className="app-bar-links">
                <div onClick={closeMobileMenu} className="nav_ham">
                  {navbar ? (
                    <Hamburger toggled={isOpen} />
                  ) : (
                    <Hamburger toggle={setOpen} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Comment/Uncomment to enable backdrop */}
          {navbar ? (
            <div onClick={closeMobileMenu} className="back-drop" />
          ) : null}
          <NavbarContent show={navbar} close={closeMobileMenu} />
        </div>
      </Mobile>
    </div>
  );
}

export default Navbar;
