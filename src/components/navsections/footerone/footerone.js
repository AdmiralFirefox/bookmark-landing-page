import React from "react";
import FormValidation from "./formvalidation";

function FooterOne() {
  return (
    <div className="footerone-wrapper">
      <div className="footerone-content">
        <div>
          <h4>35,000+ ALREADY JOINED</h4>
        </div>
        <div>
          <h2>Stay up-to-date with what we're doing</h2>
        </div>
        <div>
          <FormValidation />
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
