import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <Header/>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Home/>
          </div>
        </div>
      </div>
    );
  }
};

render(<App/>, window.document.getElementById("app"));