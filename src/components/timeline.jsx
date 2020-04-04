import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Star from "./timeline-element/star";

export default function Timeline(props) {
  return (
    <VerticalTimeline>
      {props.children}
      <Star />
    </VerticalTimeline>
  );
}
