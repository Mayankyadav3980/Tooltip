import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tooltip from './Tooltip/Tooltip'

function App() {
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
      <h1>lets start making the project</h1>
      <button id="btn" onMouseOver={showTooltip} 
      onMouseOut={hideTooltip}
      >
        Hover over me
      </button>
      <Tooltip />
    </>
  );
}

export default App
