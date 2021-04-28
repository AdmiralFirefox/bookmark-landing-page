import React, { createContext } from "react";
import CardUI from "./cardui";
import Firefox from "../../assets/logo-firefox.svg";
import Chrome from "../../assets/logo-chrome.svg";
import Opera from "../../assets/logo-opera.svg";

export const BrowserIllustrationContext = createContext();
export const BrowserSupportContext = createContext();
export const BrowserNameContext = createContext();

function Card() {
  const version = {
    chrome: "Minimum version 62",
    firefox: "Minimum version 55",
    opera: "Minimum version 46",
  };

  const browser = {
    chrome: "Add to Chrome",
    firefox: "Add to Firefox",
    opera: "Add to Opera",
  };

  return (
    <div className="card-wrapper">
      <div className="card-position">
        <div className="card-content">
          <div>
            <BrowserIllustrationContext.Provider value={Chrome}>
              <BrowserSupportContext.Provider value={version.chrome}>
                <BrowserNameContext.Provider value={browser.chrome}>
                  <CardUI />
                </BrowserNameContext.Provider>
              </BrowserSupportContext.Provider>
            </BrowserIllustrationContext.Provider>
          </div>
          <div>
            <BrowserIllustrationContext.Provider value={Firefox}>
              <BrowserSupportContext.Provider value={version.firefox}>
                <BrowserNameContext.Provider value={browser.firefox}>
                  <CardUI />
                </BrowserNameContext.Provider>
              </BrowserSupportContext.Provider>
            </BrowserIllustrationContext.Provider>
          </div>
          <div>
            <BrowserIllustrationContext.Provider value={Opera}>
              <BrowserSupportContext.Provider value={version.opera}>
                <BrowserNameContext.Provider value={browser.opera}>
                  <CardUI />
                </BrowserNameContext.Provider>
              </BrowserSupportContext.Provider>
            </BrowserIllustrationContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
