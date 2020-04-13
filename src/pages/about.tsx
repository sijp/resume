import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { makeStyles } from "@material-ui/core/styles";

import CardImage from "../components/card-image";
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
    <Container
      maxWidth="xl"
      style={{
        minHeight: "100vh"
      }}
    >
      <Container>
        <CardImage
          imageTitle="Life at Trusteer"
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
        </CardImage>
      </Container>
    </Container>
  );
}
