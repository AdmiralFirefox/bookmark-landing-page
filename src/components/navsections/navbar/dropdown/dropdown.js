import React, { useState, useRef } from "react";
import Chevron from "./chevron";
import "../../../../App.scss";

function Dropdown(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("dropdown__icon");
  const content = useRef(null);

  function toggleDropdown() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "dropdown__icon" : "dropdown__icon rotate"
    );
  }

  return (
    <div className="dropdown__section">
      <div>
        <div className={`dropdown ${setActive}`} onClick={toggleDropdown}>
          {/* Where the dropdown title is stored */}
          <p className="dropdown__title">{props.title}</p>
          {/* Icon Container */}
          <div style={{ marginLeft: "0.6em" }} className={`${setRotate}`}>
            <Chevron width={10} />
          </div>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="dropdown__content"
      >
        {props.children} {/* Where your nav links are stored */}
        <div
          className="dropdown__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Dropdown;
