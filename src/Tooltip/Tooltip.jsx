import React from "react";
import "./tooltip.css";

const Tooltip = ({ position, children, showTooltip }) => {
  return (
    <div className="tooltip_container">
      {children}
      
      {/* conditionally rendering tooltip message */}
      {showTooltip && (
        <div className={`inner_container ${position}`}>
          Thanks for hovering! I'm a tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;
