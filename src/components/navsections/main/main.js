import React from "react";
import Illustration from "../../assets/illustration-hero.svg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ChromeButton = withStyles(() => ({
  root: {
    borderRadius: "0",
    backgroundColor: "hsl(231, 69%, 60%)",
    border: "3px solid  hsl(231, 69%, 60%)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "hsl(231, 69%, 60%)",
    },
  },
}))(Button);

const FirefoxButton = withStyles(() => ({
  root: {
    borderRadius: "0",
    backgroundColor: "#C1BDB3",
    border: "3px solid  #C1BDB3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      border: "3px solid  #000",
      color: "#000",
    },
  },
}))(Button);

function Main() {
  return (
    <div className="wrapper" id="bookmark-main-section">
      <div className="content">
        <div>
          <img src={Illustration} alt="Illustration" />
          <div className="tablet" />
        </div>
        <div>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="main-button-wrapper">
            <ChromeButton variant="outlined">Get in on Chrome</ChromeButton>
            <FirefoxButton variant="outlined">Get in on Firefox</FirefoxButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
