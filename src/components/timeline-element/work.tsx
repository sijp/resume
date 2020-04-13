import React from "react";
import Base, { TimelineBaseProps } from "./base";

import WorkIcon from "@material-ui/icons/Work";

export default function Work(props: TimelineBaseProps) {
  return (
    <Base
      className="vertical-timeline-element--work"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<WorkIcon />}
      {...props}
    />
  );
}
