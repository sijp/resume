import React from "react";
import { Container, Typography, Avatar } from "@material-ui/core";

export default function Header() {
  return (
    <Container
      maxWidth="100vh"
      style={{
        height: "100vh",
        backgroundColor: "black",
        backgroundImage: "url('./wallpaper.jpg')",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center"
      }}
    >
      <div style={{ paddingTop: "250px" }}>
        <div>
          <Avatar
            alt="Shlomi Israel"
            src="https://avatars2.githubusercontent.com/u/773966?s=460&v=4"
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
            color: "black"
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
        </div>
      </div>
    </Container>
  );
}
