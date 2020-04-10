import React from "react";
import { Typography, Avatar } from "@material-ui/core";

export default function Header() {
  return (
    <>
      <div>
        <Avatar
          alt="Shlomi Israel"
          src="/my-photo.jpg"
          style={{
            width: "256px",
            height: "256px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </div>
      <div
        style={{
          textShadow: "2px 2px 1px white",
          color: "black",
          textAlign: "center"
        }}
      >
        <Typography variant="h1" gutterBottom>
          Shlomi Israel
        </Typography>
        <Typography variant="h3" gutterBottom>
          Web Architecture Enthusiast
        </Typography>
        <Typography variant="h3" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography variant="h4" gutterBottom>
          Looking for a job in Berlin
        </Typography>
      </div>
    </>
  );
}
