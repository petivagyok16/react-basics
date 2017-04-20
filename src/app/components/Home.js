import React from 'react';

import { User } from "./User"
import * as mockedUsers from "../mock/mocked-user";

export class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      users: mockedUsers.users,
      greeter: "react"
    };
  }

  onChangeGreeter(newGreeter) {
    this.setState({
      greeter: newGreeter
    });
  }


  render() {
    return (
      <div>
        <h1>Hi. I'm { this.state.greeter }. I'm alive.</h1>
        {
          this.state.users.map(
            (user) => <User
              key={ user.id }
              user={ user }
              changeGreeter={this.onChangeGreeter.bind(this)}/> )
        }
      </div>
    );
  }
}