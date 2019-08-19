import React, { useState, useEffect, useContext, useReducer } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Nav, Intro, Info } from "./component";
import Context from "./context";
import reducer from "./reducer";
import "./App.scss";

const wsLink = new WebSocketLink({
  uri: "wss://delivery-my-settle-down.herokuapp.com/graphql",
  options: {
    reconnect: true
  }
});

const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache()
});

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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
