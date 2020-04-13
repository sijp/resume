import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Star from "./timeline-element/star";

type TimelineProps = { children: Array<any> };

export default function Timeline({ children }: TimelineProps) {
  return (
    <VerticalTimeline>
      {children}
      <Star />
    </VerticalTimeline>
  );
}
