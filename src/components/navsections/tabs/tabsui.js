import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import {
  IllustrationContext,
  TabTitleContext,
  TabContentContext,
} from "./tabs";

const InfoButton = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(231, 69%, 60%)",
    "&:hover": {
      backgroundColor: "#473BF0",
    },
  },
}))(Button);

function TabsUI() {
  const Illustrations = useContext(IllustrationContext);
  const TabTitle = useContext(TabTitleContext);
  const TabContent = useContext(TabContentContext);

  return (
    <div className="tab-ui-wrapper">
      <div className="tab-ui-content">
        <div>
          <img src={Illustrations} alt="Tab 1 Illustration" />
        </div>
        <div>
          <h2>{TabTitle}</h2>
          <p>{TabContent}</p>
          <InfoButton variant="contained">More Info</InfoButton>
        </div>
      </div>
    </div>
  );
}

export default TabsUI;
