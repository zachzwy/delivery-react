import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { Nav, Intro, Info } from "./component";
import "./App.scss";

function App() {
  const [navClass, setNacClass] = useState("");

  const handleTrans = () => {
    const bodyDOM = document.querySelector("body");
    setNacClass(bodyDOM.className === "fp-viewing-secondPage" ? "dark" : "");
  };

  useEffect(() => {
    window.addEventListener("transitionend", handleTrans);
    return () => window.removeEventListener("transitionend", handleTrans);
  }, []);

  return (
    <>
      <Nav navClass={navClass} />
      <ReactFullpage
        anchors={["firstPage", "secondPage"]}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div className="section" id="background">
                <Intro fullpageApi={fullpageApi} />
              </div>
              <div className="section">
                <Info />
              </div>
            </>
          );
        }}
      />
    </>
  );
}

export default App;
