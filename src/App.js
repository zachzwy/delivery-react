import React, { useState, useEffect, useContext, useReducer } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { Nav, Intro, Info } from "./component";
import Context from "./context";
import reducer from "./reducer";
import "./App.scss";

function App() {
  const [navClass, setNavClass] = useState("");
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTrans = () => {
    const bodyDOM = document.querySelector("body");
    setNavClass(bodyDOM.className === "fp-viewing-secondPage" ? "dark" : "");
  };

  useEffect(() => {
    window.addEventListener("transitionend", handleTrans);
    return () => window.removeEventListener("transitionend", handleTrans);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
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
    </Context.Provider>
  );
}

export default App;
