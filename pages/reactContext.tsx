import { NextPage } from "next";
import React from "react";

const context = React.createContext('L')


const Children = () => {
  return (
    <context.Consumer>
      {ls => {
        return (
          <div>
            <h1>{ls}</h1>
          </div>
        )
      }}
    </context.Consumer>

  )
}


const ReactContext: NextPage = () => {
  return <>
    <context.Provider value="a">
      <Children />
    </context.Provider>
  </>
}

export default ReactContext;
