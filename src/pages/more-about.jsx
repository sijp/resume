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
        <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
          More about me
        </Typography>
        <CardImage imageTitle="Life at Trusteer" image="./shlomi-baruch.jpg">
          <Typography component="div" style={{ fontSize: 30 }}>
            <p>
              I share my life with my partner{" "}
              <a href="https://www.linkedin.com/in/baruch-shteken/">Baruch</a>.
              We are both originally from Central Israel and are looking forward
              our next chapter together in Berlin.
            </p>
            <p>Baruch is a super intelligent data developer.</p>
          </Typography>
        </CardImage>
        <br />
        <br />
        <br />
        <br />
        <CardImage
          imageTitle="Life at Trusteer"
          image="./shlomi-laika.jpg"
          imageFirst={true}
        >
          <Typography component="div" style={{ fontSize: 30 }}>
            <p>
              We grow together our dog Laika, a very sensitive Belgian Malinois
              mix. I'm an animal lover, I especially like dogs.
            </p>
            <p>
              I volunteered in the past in the local SPCA, and currently
              moderate a facebook support group for sensitive dogs owners.
            </p>
          </Typography>
        </CardImage>

        <br />
        <br />
        <br />
      </Container>
    </Container>
  );
}
