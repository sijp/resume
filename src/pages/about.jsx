import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent
} from "@material-ui/core";

export default function() {
  return (
    <Container
      maxWidth="100vh"
      style={{
        height: "100vh",
        paddingTop: 100,
        backgroundImage: "url(./wallpaper-about.jpg)",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <Card style={{ display: "flex" }} raised={true}>
          <CardMedia
            title="Life at Trusteer"
            image="./working-in-trusteer.jpg"
            style={{ width: "300px" }}
          />
          <CardContent style={{ flex: "1 0 " }}>
            <Typography
              gutterBottom
              variant="h3"
              style={{ textAlign: "center" }}
            >
              About myself
            </Typography>
            <Typography style={{ fontSize: 30 }}>
              <p>
                I’m a Full Stack developer, and passionate about programming.
                I’m always ready to get new sources of ideas and skills, I love
                discussing technologies and collaborating with skilled
                individuals and groups.
              </p>
              <p>
                I worked for 6 years in Trusteer (a division of IBM Security),
                and made a big journey, working and integrating with numerous
                local and remote teams in order to deliver high quality tools to
                our customers.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
