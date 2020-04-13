import React from "react";
import StarIcon from "@material-ui/icons/Star";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function Star() {
  return (
    <VerticalTimelineElement
      iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      icon={<StarIcon />}
    />
  );
}
