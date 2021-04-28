import React, { createContext } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TabsUI from "./tabsui";
import { useMediaQuery } from "react-responsive";
import Tab1 from "../../assets/illustration-features-tab-1.svg";
import Tab2 from "../../assets/illustration-features-tab-2.svg";
import Tab3 from "../../assets/illustration-features-tab-3.svg";

//For Creating Context
export const IllustrationContext = createContext();
export const TabTitleContext = createContext();
export const TabContentContext = createContext();

//For Mobile Responsivenes
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 701 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return isMobile ? children : null;
};

//For Tab Content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {/* Change Padding of Tab Content */}
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "transparent",
    flexGrow: 1,
  },
}));

function TabContent() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const TabAppBar = {
    boxShadow: "none",
    backgroundColor: "#fff",
  };

  const tabTitle = {
    tab1: "Bookmark in one click",
    tab2: "Intelligent search",
    tab3: "Share your bookmarks",
  };

  const tabContent = {
    tab1:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites",
    tab2:
      "Our powerful search feature will help you find saved sites in no time. No need to trawl through all of your bookmarks",
    tab3:
      "Easily share you bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
  };

  return (
    <div className="tab-wrapper">
      <div className="tab-position">
        <div className="tab-content">
          <Desktop>
            <div className={classes.root}>
              <AppBar position="static" color="default" style={TabAppBar}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  centered
                  TabIndicatorProps={{
                    style: { borderBottom: "5px solid hsl(0, 94%, 66%)" },
                  }}
                >
                  <Tab label="Simple Bookmarking" {...a11yProps(0)} />
                  <Tab label="Speedy Searching" {...a11yProps(1)} />
                  <Tab label="Easy Sharing" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <TabContentContext.Provider value={tabContent.tab1}>
                    <TabTitleContext.Provider value={tabTitle.tab1}>
                      <IllustrationContext.Provider value={Tab1}>
                        <TabsUI />
                      </IllustrationContext.Provider>
                    </TabTitleContext.Provider>
                  </TabContentContext.Provider>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <TabContentContext.Provider value={tabContent.tab2}>
                    <TabTitleContext.Provider value={tabTitle.tab2}>
                      <IllustrationContext.Provider value={Tab2}>
                        <TabsUI />
                      </IllustrationContext.Provider>
                    </TabTitleContext.Provider>
                  </TabContentContext.Provider>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <TabContentContext.Provider value={tabContent.tab3}>
                    <TabTitleContext.Provider value={tabTitle.tab3}>
                      <IllustrationContext.Provider value={Tab3}>
                        <TabsUI />
                      </IllustrationContext.Provider>
                    </TabTitleContext.Provider>
                  </TabContentContext.Provider>
                </TabPanel>
              </SwipeableViews>
            </div>
            <div className="tabs-ui-tablet" />
          </Desktop>
          <Mobile>
            <div className={classes.root}>
              <AppBar position="static" color="default" style={TabAppBar}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  orientation="vertical"
                  variant="fullWidth"
                  TabIndicatorProps={{
                    style: { borderLeft: "5px solid hsl(0, 94%, 66%)" },
                  }}
                >
                  <Tab label="Simple Bookmarking" {...a11yProps(0)} />
                  <Tab label="Speedy Searching" {...a11yProps(1)} />
                  <Tab label="Easy Sharing" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <TabContentContext.Provider value={tabContent.tab1}>
                    <TabTitleContext.Provider value={tabTitle.tab1}>
                      <IllustrationContext.Provider value={Tab1}>
                        <TabsUI />
                      </IllustrationContext.Provider>
                    </TabTitleContext.Provider>
                  </TabContentContext.Provider>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <TabContentContext.Provider value={tabContent.tab2}>
                    <TabTitleContext.Provider value={tabTitle.tab2}>
                      <IllustrationContext.Provider value={Tab2}>
                        <TabsUI />
                      </IllustrationContext.Provider>
                    </TabTitleContext.Provider>
                  </TabContentContext.Provider>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <TabContentContext.Provider value={tabContent.tab3}>
                    <TabTitleContext.Provider value={tabTitle.tab3}>
                      <IllustrationContext.Provider value={Tab3}>
                        <TabsUI />
                      </IllustrationContext.Provider>
                    </TabTitleContext.Provider>
                  </TabContentContext.Provider>
                </TabPanel>
              </SwipeableViews>
            </div>
            <div className="tabs-ui-tablet-mobile" />
          </Mobile>
        </div>
        {/* <div className="tabs-ui-tablet" /> */}
      </div>
    </div>
  );
}

export default TabContent;
