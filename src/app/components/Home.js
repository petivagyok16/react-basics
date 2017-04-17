import React from 'react';

import { User } from "./User"
import * as mockedUsers from "../mock/mocked-user";

export class Home extends React.Component {
  users = mockedUsers.users;

  render() {
    return (
      <div>
        <h1>Hi. I'm react. I'm alive.</h1>
        {
          this.users.map( (user) => <User key={ user.id } user={ user }/> )
        }
      </div>
    );
  }
}