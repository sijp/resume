import React from "react";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import { ReactComponent as LinkedInLogo } from "../logos/linkedin.svg";

const useStyles = makeStyles((theme) => ({
  buttonDiv: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.buttonDiv}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        href="/shlomi-israel.pdf"
        target="_blank"
      >
        <CloudDownloadIcon /> &nbsp; Get my CV
      </Button>
      <Button
        size="large"
        variant="contained"
        color="default"
        href="https://www.linkedin.com/in/shlomi-israely/"
        target="_blank"
      >
        <LinkedInLogo fill="currentColor" width="24" height="24" />
        &nbsp; View LinkedIn Profile
      </Button>
    </div>
  );
}
