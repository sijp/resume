import React from "react";
import Milestones from "../components/milestones";
//import { Card, CardContent } from "@material-ui/core";
import rorLogo from "../logos/ror.svg";
import pythonLogo from "../logos/py.svg";
import ibmSecurityLogo from "../logos/ibm-security.svg";
import nodejsLogo from "../logos/nodejs.svg";
import { Typography } from "@material-ui/core";

export default function () {
  const updateLocalStorage = (step: number | string) => {
    window.localStorage.setItem("importantMilestones.currentStep", `${step}`);
  };
  const initStep =
    window.localStorage.getItem("importantMilestones.currentStep") || 0;
  const steps = [
    "Ruby on Rails",
    "Python Micro-services",
    "Team Lead",
    "Micro-services Framework",
    "Web Architect"
  ];
  return (
    <Milestones
      steps={steps}
      initStep={initStep}
      onChange={updateLocalStorage}
      title="My Milestones"
    >
      <>
        <img
          src={rorLogo}
          width="150px"
          alt="Ruby on Rails Logo"
          style={{ float: "left", margin: "0 30px 20px 0" }}
        />
        <Typography variant="h5">April 2014 - Ruby on Rails</Typography>
        <Typography gutterBottom>
          Started working in Trusteer as part of the core full stack web team,
          responsible for the main reporting and analysis customer facing
          application. Developed a large scale Ruby on Rails application with
          complex SQL queries on top of MySQL.
        </Typography>
        <Typography gutterBottom>
          User Interface was developed using Sencha ExtJS 4.2, deployment using
          Capistrano to AWS EC2.
        </Typography>
        <Typography component="div">
          Notable achievements Include:
          <ul>
            <li>
              OpenID implementation for integration with IBMid - requested by
              Bank of America.
            </li>
            <li>Scheduled tasks management subsystem.</li>
            <li>Taking high software security standards in mind.</li>
          </ul>
        </Typography>
      </>
      <>
        <img
          src={pythonLogo}
          width="150px"
          alt="Python Logo"
          style={{ float: "left", margin: "0 30px 20px 0" }}
        />
        <Typography variant="h5">
          January 2017 - Python Micro-services
        </Typography>
        <Typography gutterBottom>
          Made an intensive research on Micro Services architecture, and decided
          to base on Sam Newman's book "Building Micro-services". Developed the
          first services in Python that were responsible to manage long
          asynchronous tasks.
        </Typography>
        <Typography gutterBottom>
          Mostly used Flask for api services and RabbitMQ for asynchronous
          operations. The services were fully integrated with the main
          monolithic application.
        </Typography>
      </>
      <>
        <img
          src={ibmSecurityLogo}
          width="150px"
          alt="IBM Security Logo"
          style={{ float: "left", margin: "0 30px 20px 0" }}
        />
        <Typography variant="h5">June 2018 - {steps[2]}</Typography>
        <Typography gutterBottom>
          I was promoted to Team Lead and Architect. I recruited new developers,
          making the team twice as large. I was responsible for the team's
          technical growth as a technical mentor.
        </Typography>
        <Typography gutterBottom>
          Also, I was given the task of being the architect of the new customer
          facing analysis application using Node.js and React over Elastic
          Search and Couchbase. I lead the team and provided technical
          guidelines for building its services while taking a big part in
          developing the core infrastructure.
        </Typography>
      </>
      <>
        <img
          src={nodejsLogo}
          width="150px"
          alt="Node.js Logo"
          style={{ float: "left", margin: "0 30px 20px 0" }}
        />
        <Typography variant="h5">September 2018 - {steps[3]}</Typography>
        <Typography gutterBottom>
          Using Node.js, engineered a large scale, multi purpose framework for
          building micro services. Using Domain Driven Development concepts and
          prioritizing the concepts of loose coupling and high cohesion.
        </Typography>
        <Typography gutterBottom>
          The framework allowed the core team to develop the next generation
          analysis application's requirements as an eco system built of numerous
          micro services which is tolerant for changes and new requirements.
        </Typography>
        <Typography gutterBottom>
          The framework was designed to be used by other Trusteer products and
          teams as well.
        </Typography>
      </>
      <>
        <img
          src={ibmSecurityLogo}
          width="150px"
          alt="IBM Security Logo"
          style={{ float: "left", margin: "0 30px 20px 0" }}
        />
        <Typography variant="h5">January 2019 - {steps[4]}</Typography>
        <Typography gutterBottom>
          During my role as a team lead, I provided technological consultancy to
          two other teams in my group.
        </Typography>
        <Typography gutterBottom>
          Firstly I helped the demo team, which was responsible for building
          demonstration tools for sales and deployment engineers. One of the
          main tools was providing tools for customers' developers to integrate
          with our APIs. We used our framework to build an application which was
          fully integrated with our Single Sign-on mechanisms and user
          management systems.
        </Typography>
        <Typography gutterBottom>
          I also provided consultancy for our automation team, which was
          responsible for building a fully automated testing framework using
          python and react.
        </Typography>
      </>
    </Milestones>
  );
}
