import React from "react";
import { Container, Typography } from "@material-ui/core";

import ContactButtons from "../components/contact-buttons";

import { ReactComponent as GithubLogo } from "../logos/github.svg";

export default function () {
  return (
    <Container maxWidth="xl" style={{ textAlign: "center", color: "white" }}>
      <Typography variant="button">
        This web app's code is available to view on
      </Typography>

      <br />
      <br />
      <br />

      <a
        href="https://github.com/sijp/resume"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubLogo fill="white" height="64" width="180" />
      </a>

      <br />
      <br />
      <br />

      <Typography variant="button">
        and deployed using GitHub Actions to AWS S3
      </Typography>

      <br />
      <br />
      <br />

      <Typography component="span" variant="button">
        Read more in my{" "}
      </Typography>

      <Typography
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/pulse/cicd-static-web-app-github-actions-aws-s3-shlomi-israely/"
        style={{ color: "white" }}
        component="a"
        variant="body2"
        color="inherit"
      >
        LinkedIn Article
      </Typography>
      <br />
      <br />
      <br />
      <ContactButtons />
    </Container>
  );
}
