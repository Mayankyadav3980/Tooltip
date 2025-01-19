import { useState } from "react";
import "./App.css";
import Tooltip from "./Tooltip/Tooltip";

function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className="main_container">
        <div className="box">
          <Tooltip position="right" showTooltip={showTooltip}>
            <button
              id="btn"
              onMouseOver={() => setShowTooltip(true)}
              onMouseOut={() => setShowTooltip(false)}
            >
              Hover over me
            </button>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default App;
