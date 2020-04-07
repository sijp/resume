import React from "react";
import Base from "./base";

import WorkIcon from "@material-ui/icons/Work";

export default function Work(props) {
  return (
    <Base
      className="vertical-timeline-element--work"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<WorkIcon />}
      {...props}
    />
  );
}
