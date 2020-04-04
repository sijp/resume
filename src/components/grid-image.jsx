import React from "react";
import { Grid } from "@material-ui/core";

export default function(props) {
  const { xs, width, height, src, alt } = props;
  return (
    <Grid item xs={xs} style={{ textAlign: "center" }}>
      <img src={src} width={width} height={height} alt={alt} />
    </Grid>
  );
}
