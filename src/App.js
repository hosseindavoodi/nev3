import React, { useState } from "react";

import "./style/tailwind.output.css";
import "./style/style.css" 

const App = () => {
  const [back, setBack] = useState("")
  const [backtext, setBacktext] = useState("")
  
const frontF = () => {
  setBack("")
  setBacktext("backtextb")
}

const backF = () => {
  setBack("is-flipped")
  setBacktext("backtext")
}


  return (
  <div className="flip absolute inset-x-0 mx-auto mt-5 text-white ">
    <div className={"card w-full h-full " + back}>
      {/* card front */}
      <div onClick={backF} className="absolute rounded-2xl pt-5 pl-8 pr-5 w-full h-full card__face front ">
        <h2>Questions? <br /> Go ahead, give us a call.</h2>
        <div className="open absolute" onClick={backF}></div>
      </div>
      {/* card back */}
      <div className="absolute rounded-2xl pt-5 pl-8 pr-5 w-full h-full card__face back">
        <div className={backtext}>
        <h2 className="mb-5">Lorum Ipsum ...</h2>
        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. </p>
        </div>
        <div className="close absolute" onClick={frontF}></div>
      </div>
    </div>
  </div>

  );
};

export default App;
