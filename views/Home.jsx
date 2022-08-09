const React = require("react");

import { Navbar } from "./Navbar";

function Home(props) {
  return (
    <>
      {/* <Navbar /> */}
      <div>Hello from Home{props.name}</div>
    </>
  );
}

module.exports = Home;
