import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  lg: {
    width: 64,
    height: 64
  },
  md: {
    width: 36,
    height: 36
  },
  sm: {
    width: 24,
    height: 24
  },
  "@media only screen and (min-width: 800px)": {
    lg: {
      width: 200,
      height: 200
    },
    md: {
      width: 100,
      height: 100
    },
    sm: {
      width: 50,
      height: 50
    }
  }
});

export default function (props) {
  const { xs, size, src, alt } = props;
  const classes = useStyles();
  return (
    <Grid item xs={xs} style={{ textAlign: "center" }}>
      <img src={src} className={classes[size]} alt={alt} />
    </Grid>
  );
}
