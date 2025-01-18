import React from "react";
import "./tooltip.css";

const Tooltip = ({ position }) => {
  return (
    <div className="tooltip_container" id="tooltip">
      <div className="inner_container"></div>
      Thanks for hovering! I'm a tooltip
    </div>
  );
};

export default Tooltip;
