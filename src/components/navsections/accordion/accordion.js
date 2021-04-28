import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordionButton = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(231, 69%, 60%)",
    "&:hover": {
      backgroundColor: "#473BF0",
    },
  },
}))(Button);

function AccordionSection() {
  const classes = useStyles();
  return (
    <div className="accordion-wrapper">
      <div className="accordion-position">
        <div className="accordion-content">
          <div className={classes.root}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What is Bookmark?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolores enim, vero atque quaerat eos excepturi quis
                  aspernatur explicabo, culpa iste nobis itaque ea autem.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  How can I request a new browser?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolores enim, vero atque quaerat eos excepturi quis
                  aspernatur explicabo, culpa iste nobis itaque ea autem.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Is there a mobile app?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolores enim, vero atque quaerat eos excepturi quis
                  aspernatur explicabo, culpa iste nobis itaque ea autem.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What about other chronium browsers?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolores enim, vero atque quaerat eos excepturi quis
                  aspernatur explicabo, culpa iste nobis itaque ea autem.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="accordion-button-wrapper">
        <AccordionButton variant="contained">More Info</AccordionButton>
      </div>
    </div>
  );
}

export default AccordionSection;
