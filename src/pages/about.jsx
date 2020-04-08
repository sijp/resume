import React from "react";
import { Container, Typography } from "@material-ui/core";

import CardImage from "../components/card-image";

export default function () {
  return (
    <Container
      maxWidth="xl"
      style={{
        minHeight: "100vh"
      }}
    >
      <Container>
        <CardImage
          title="Life at Trusteer"
          image="./working-in-trusteer.jpg"
          imageFirst={true}
        >
          <Typography gutterBottom variant="h3" style={{ textAlign: "center" }}>
            About myself
          </Typography>
          <Typography>
            I’m a Full Stack developer, and passionate about programming. I’m
            always ready to get new sources of ideas and skills, I love
            discussing technologies and collaborating with skilled individuals
            and groups.
          </Typography>
          <Typography>
            I worked for 6 years in Trusteer (a division of IBM Security), and
            made a big journey, working and integrating with numerous local and
            remote teams in order to deliver high quality tools to our
            customers.
          </Typography>
        </CardImage>
      </Container>
    </Container>
  );
}
