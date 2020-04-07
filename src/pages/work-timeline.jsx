import React from "react";
import { Typography } from "@material-ui/core";

import Timeline from "../components/timeline";

import School from "../components/timeline-element/school";
import Work from "../components/timeline-element/work";

import ibmSecurityLogo from "../logos/ibm-security.svg";
import bguLogo from "../logos/bgu.svg";

export default function workTimeline() {
  return (
    <>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Work and Education
      </Typography>
      <br />
      <Timeline>
        <Work
          title="Web Architect &amp; Team Lead"
          institute="IBM Security (Trusteer)"
          location="Tel Aviv"
          date="2018-2020"
          logo={ibmSecurityLogo}
        >
          <p>
            Designed Trustboard our next-generation risks and reporting
            management application from the ground up, with the help of 5 other
            engineers, using modern technologies such as React, Node.js on top
            of ElasticSearch and Couchbase. One of Trusteer’s most focused
            projects.
          </p>
        </Work>
        <Work
          title="Full Stack Developer"
          institute="IBM Security (Trusteer)"
          location="Tel Aviv"
          date="2014-2018"
          logo={ibmSecurityLogo}
        >
          <p>
            Developed Trusteer’s risks and reporting management application
            (TMA) using Ruby on Rails and Sencha ExtJS frameworks on top of
            MySQL and Couchbase as main data sources.
          </p>
        </Work>

        <School
          title="Computer Science"
          institute="Ben-Gurion University"
          location="Be’er Sheva"
          date="2010-2013"
          logo={bguLogo}
        >
          <p>Bachelor of Science from the department of Computer Science</p>
        </School>
      </Timeline>
    </>
  );
}
