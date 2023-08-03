import React from "react";
import "./Heading.scss";
const Heading = ({ value, head }: { value: string; head?: boolean }) => {
  return (
    <div className={`heading_parent ${head ? "bigger" : ""}`}>{value}</div>
  );
};

export default Heading;
