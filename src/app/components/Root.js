import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <Header/>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {/*{ this.props.children }*/}
          </div>
        </div>
      </div>
    );
  }
};