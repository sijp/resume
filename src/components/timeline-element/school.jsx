import React from "react";

import Base from "./base";
import SchoolIcon from "@material-ui/icons/School";

export default function School(props) {
  return (
    <Base
      className="vertical-timeline-element--education"
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      icon={<SchoolIcon />}
      {...props}
    />
  );
}
