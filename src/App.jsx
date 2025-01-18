import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tooltip from './Tooltip/Tooltip'

function App() {
    const [st, sst] = useState(false);
    const showTooltip = (e) => {
      console.log('on btn');
      
      let s = document.querySelector("#tooltip")
      console.log(s.classList);
      s.classList.add('visible')
      console.log(s.classList);
      
      
      // document.querySelector("#btn").classList.add("visible");
    }

    const hideTooltip = (e) => {
      console.log("moving out of btn");
       document.getElementById("tooltip").classList.remove("bdr");
      //  document.querySelector("#btn").classList.remove("bdr");
    }

  return (
    <>
      <div className="main_container">
        <div className="box">
          <button
            id="btn"
            onMouseOver={() => sst(true)}
            onMouseOut={() => sst(false)}
          >
            Hover over me
          {/* {st && <Tooltip position='right'/>} */}
          </button>
          <Tooltip />
        </div>
      </div>
    </>
  );
}

export default App
