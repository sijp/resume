import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  expansionPanel: {
    boxShadow: "none",
    "&::before": {
      backgroundColor: "inherit"
    }
  },
  expandIcon: {
    marginBottom: "auto"
  },
  avatar: {
    marginRight: "10px",
    width: "32px",
    height: "32px"
  },
  "@media only screen and (min-width: 640px)": {
    avatar: {
      marginRight: "35px",
      width: "96px",
      height: "96px"
    }
  }
}));

export default function Base(props) {
  const classes = useStyles();
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={props.date}
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      contentStyle={{ textAlign: "left", padding: 5 }}
      icon={props.icon}
      {...props}
    >
      <ExpansionPanel
        className={classes.expansionPanel}
        TransitionProps={{ unmountOnExit: true }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{ expandIcon: classes.expandIcon }}
        >
          <Grid container>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <Typography variant="h5" gutterBottom>
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ marginTop: 15 }}>
              {props.logo && (
                <div>
                  <Avatar
                    src={props.logo}
                    alt={props.institute}
                    title={props.institute}
                    className={classes.avatar}
                  />
                </div>
              )}
            </Grid>
            <Grid item xs={8} style={{ marginTop: 30 }}>
              <div>
                <Typography variant="h6" gutterBottom>
                  {props.institute}
                </Typography>
              </div>
              <div>
                <Typography variant="h6" gutterBottom>
                  {props.location}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body1">{props.children}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </VerticalTimelineElement>
  );
}
