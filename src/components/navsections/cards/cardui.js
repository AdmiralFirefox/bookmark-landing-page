import React, { useContext } from "react";
import "@material/react-card/index.scss";
import Card from "@material/react-card";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  BrowserIllustrationContext,
  BrowserSupportContext,
  BrowserNameContext,
} from "./card";

const AddExtensionButton = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(231, 69%, 60%)",
    border: "3px solid hsl(231, 69%, 60%)",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "#fff",
      color: "hsl(231, 69%, 60%)",
    },
  },
}))(Button);

function CardUI() {
  const BrowserIllustration = useContext(BrowserIllustrationContext);
  const BrowserSupport = useContext(BrowserSupportContext);
  const BrowserName = useContext(BrowserNameContext);

  return (
    <div className="card-ui-wrapper">
      <Card id="card-ui-content">
        <div>
          <img src={BrowserIllustration} alt="Web Logo" />
        </div>

        <div>
          <h2>{BrowserName}</h2>
          <p>{BrowserSupport}</p>
        </div>

        <div>
          <AddExtensionButton variant="outlined">
            Add & Install Extension
          </AddExtensionButton>
        </div>
      </Card>
    </div>
  );
}

export default CardUI;
