import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";

import jsLogo from "../logos/js.svg";
import pythonLogo from "../logos/py.svg";
import rubyLogo from "../logos/rb.svg";
import nodejsLogo from "../logos/nodejs.svg";
import reactLogo from "../logos/react.svg";
import rorLogo from "../logos/ror.svg";
import reduxLogo from "../logos/redux.svg";
import vueLogo from "../logos/vue.svg";

import GridImage from "../components/grid-image";
import VictoryStackChart from "../components/victory-stack-chart";

function getData() {
  return {
    jquery: {
      data: [
        { x: "2014", y: 0 },
        { x: "2017", y: 10 },
        { x: "2018", y: 0 },
        { x: "2020", y: 0 }
      ],
      style: { fill: "#303F9F" },
      legend: "jQuery"
    },
    extjs: {
      data: [
        { x: "2014", y: 50 },
        { x: "2017", y: 40 },
        { x: "2018", y: 10 },
        { x: "2020", y: 10 }
      ],
      style: { fill: "#448AFF" },
      legend: "ExtJS"
    },
    ror: {
      data: [
        { x: "2014", y: 50 },
        { x: "2017", y: 40 },
        { x: "2018", y: 10 },
        { x: "2020", y: 10 }
      ],
      style: { fill: "#CC0000" },
      legend: "Ruby on Rails"
    },
    react: {
      data: [
        { x: "2014", y: 0 },
        { x: "2017", y: 0 },
        { x: "2018", y: 30 },
        { x: "2020", y: 40 }
      ],
      style: { fill: "#61DAFB" },
      legend: "React"
    },
    nodejs: {
      data: [
        { x: "2014", y: 0 },
        { x: "2017", y: 0 },
        { x: "2018", y: 40 },
        { x: "2020", y: 40 }
      ],
      style: { fill: "#3E863D" },
      legend: "Node.js"
    },
    flask: {
      data: [
        { x: "2014", y: 0 },
        { x: "2017", y: 10 },
        { x: "2018", y: 10 },
        { x: "2020", y: 0 }
      ],
      style: { fill: "#F8BBD0" },
      legend: "Flask"
    }
  };
}

export default function () {
  return (
    <Container style={{ minWidth: 640 }}>
      <Grid container spacing={10} style={{ marginTop: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Tools of Trade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <VictoryStackChart
            xLabel="Notable Years"
            title="Technology Stack Distribution"
            data={getData()}
          ></VictoryStackChart>
        </Grid>
        <GridImage xs={4} src={reactLogo} width="200" height="200" />
        <GridImage xs={4} src={jsLogo} width="200" height="200" />
        <GridImage xs={4} src={nodejsLogo} width="200" height="200" />
        <Grid item xs={1} />
        <GridImage xs={2} src={rorLogo} width="100" height="100" />
        <GridImage xs={2} src={rubyLogo} width="100" height="100" />
        <GridImage xs={2} src={pythonLogo} width="100" height="100" />
        <GridImage xs={2} src={reduxLogo} width="100" height="100" />
        <GridImage xs={2} src={vueLogo} width="100" height="100" />
      </Grid>
    </Container>
  );
}
