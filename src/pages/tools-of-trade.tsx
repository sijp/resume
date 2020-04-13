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
import VictoryStackChart, {
  StackedChartData
} from "../components/victory-stack-chart";

function getData(): StackedChartData {
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
    <Container>
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
        <GridImage xs={4} src={reactLogo} size="lg" />
        <GridImage xs={4} src={jsLogo} size="lg" />
        <GridImage xs={4} src={nodejsLogo} size="lg" />
        <Grid item xs={1} />
        <GridImage xs={2} src={rorLogo} size="md" />
        <GridImage xs={2} src={rubyLogo} size="md" />
        <GridImage xs={2} src={pythonLogo} size="md" />
        <GridImage xs={2} src={reduxLogo} size="md" />
        <GridImage xs={2} src={vueLogo} size="md" />
      </Grid>
    </Container>
  );
}
