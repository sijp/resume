import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography, Avatar, Grid } from "@material-ui/core";

export default function Base(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={props.date}
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      contentStyle={{ textAlign: "left" }}
      style={{ padding: "5px" }}
      icon={props.icon}
      {...props}
    >
      <ExpansionPanel
        TransitionProps={{ unmountOnExit: true }}
        style={{ boxShadow: "none" }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container xs={12}>
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
                    style={{
                      marginRight: "35px",
                      width: "96px",
                      height: "96px"
                    }}
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
                <Typography variant="h7" gutterBottom>
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
